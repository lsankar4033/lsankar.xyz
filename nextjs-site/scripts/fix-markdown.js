const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove standalone asterisks that are on their own lines
  content = content.replace(/^\*\s*$/gm, '');
  
  // Remove "No newline at end of file" messages
  content = content.replace(/ No newline at end of file/g, '');
  
  // Clean up duplicate newlines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

console.log('Fixed all markdown files');