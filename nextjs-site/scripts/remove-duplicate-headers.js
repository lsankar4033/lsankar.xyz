const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  const title = data.title;
  if (!title) return;
  
  // Create different variations to match against
  const titleVariations = [
    title.toLowerCase(),
    title,
    title.replace(/[^\w\s]/g, '').toLowerCase(), // Remove punctuation
    title.replace(/[^\w\s]/g, ''), // Remove punctuation, keep case
  ];
  
  let modifiedContent = content;
  let hasChanges = false;
  
  // Look for headers that match the title (## or ###)
  const headerRegex = /^(#{2,3})\s+(.+)$/gm;
  
  modifiedContent = modifiedContent.replace(headerRegex, (match, hashes, headerText) => {
    const cleanHeaderText = headerText.trim();
    
    // Check if this header matches any title variation
    const headerVariations = [
      cleanHeaderText.toLowerCase(),
      cleanHeaderText,
      cleanHeaderText.replace(/[^\w\s]/g, '').toLowerCase(),
      cleanHeaderText.replace(/[^\w\s]/g, ''),
    ];
    
    for (const titleVar of titleVariations) {
      for (const headerVar of headerVariations) {
        if (titleVar === headerVar) {
          console.log(`Removing duplicate header "${cleanHeaderText}" from ${file}`);
          hasChanges = true;
          return ''; // Remove the header
        }
      }
    }
    
    return match; // Keep the header
  });
  
  if (hasChanges) {
    // Clean up any extra newlines left behind
    modifiedContent = modifiedContent.replace(/\n\n\n+/g, '\n\n');
    modifiedContent = modifiedContent.trim();
    
    // Reconstruct the file with frontmatter
    const newFileContent = matter.stringify(modifiedContent, data);
    fs.writeFileSync(filePath, newFileContent);
  }
});

console.log('Finished checking all posts for duplicate headers');