const fs = require('fs');
const path = require('path');

// Read the original posts.js to get metadata
const postsPath = path.join(__dirname, '../../src/posts.js');
const postsContent = fs.readFileSync(postsPath, 'utf8');

// Extract post metadata
const metadataRegex = /{\s*title:\s*"([^"]+)",\s*path:\s*"([^"]+)",\s*body:\s*b(\d+),\s*category:\s*"([^"]+)",\s*date:\s*new Date\("([^"]+)"\)\s*}/g;
const postMetadata = [];
let match;

while ((match = metadataRegex.exec(postsContent)) !== null) {
  postMetadata.push({
    title: match[1],
    path: match[2],
    postNumber: match[3],
    category: match[4],
    date: match[5]
  });
}

// Function to convert HTML to MDX
function htmlToMdx(html, metadata) {
  let mdx = html
    .replace(/export default `/, '')
    .replace(/`;?\s*$/, '')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<h2[^>]*>([^<]+)<\/h2>/g, '## $1')
    .replace(/<h3[^>]*>([^<]+)<\/h3>/g, '### $1')
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n')
    .replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, '[$2]($1)')
    .replace(/<i>([^<]+)<\/i>/g, '*$1*')
    .replace(/<em>([^<]+)<\/em>/g, '*$1*')
    .replace(/<strong>([^<]+)<\/strong>/g, '**$1**')
    .replace(/<b>([^<]+)<\/b>/g, '**$1**')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();

  // Fix MDX-specific issues
  // Replace <number pattern (like <32ETH) with escaped version
  mdx = mdx.replace(/<(\d+[A-Za-z]+)/g, '\\<$1');
  // Replace arrow patterns
  mdx = mdx.replace(/<--->/g, '\\<--->');
  mdx = mdx.replace(/<-->/g, '\\<-->');
  mdx = mdx.replace(/<->/g, '\\<->');
  
  // Remove the first h2 if it matches the title (to avoid duplicate titles)
  const titlePattern = new RegExp(`^## ${metadata.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n?`, 'm');
  mdx = mdx.replace(titlePattern, '');

  // Create frontmatter
  const frontmatter = `---
title: "${metadata.title}"
date: "${metadata.date}"
category: "${metadata.category}"
---

`;

  return frontmatter + mdx;
}

// Create output directory
const outputDir = path.join(__dirname, '../content/posts');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert each post
postMetadata.forEach(metadata => {
  try {
    const postPath = path.join(__dirname, '../../src/posts', `${metadata.postNumber}.js`);
    const postContent = fs.readFileSync(postPath, 'utf8');
    
    const mdxContent = htmlToMdx(postContent, metadata);
    
    // Create slug from path
    const slug = metadata.path.replace(/^\//, '').replace(/\/$/, '');
    const outputPath = path.join(outputDir, `${slug}.mdx`);
    
    fs.writeFileSync(outputPath, mdxContent);
    console.log(`Converted post ${metadata.postNumber}: ${metadata.title} -> ${slug}.mdx`);
  } catch (error) {
    console.error(`Error converting post ${metadata.postNumber}:`, error.message);
  }
});

console.log('Post conversion complete!');