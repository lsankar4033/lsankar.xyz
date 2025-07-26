const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

console.log('Removing first headers from all posts...\n');

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  // Check if content starts with a header (after any whitespace)
  const trimmedContent = content.trim();
  const headerRegex = /^(#{1,6})\s+(.+)$/;
  const match = trimmedContent.match(headerRegex);
  
  if (match) {
    const headerText = match[2];
    console.log(`✂️  Removing first header "${headerText}" from ${file}`);
    
    // Remove the first header line
    const lines = trimmedContent.split('\n');
    const modifiedContent = lines.slice(1).join('\n').trim();
    
    // Reconstruct the file with frontmatter
    const newFileContent = matter.stringify(modifiedContent, data);
    fs.writeFileSync(filePath, newFileContent);
  }
});

console.log('\n✅ Finished removing first headers!');