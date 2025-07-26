const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

console.log('Auditing posts for duplicate headers...\n');

let foundDuplicates = [];

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  const title = data.title;
  if (!title) return;
  
  // Create different variations to match against
  const titleBase = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const titleVariations = [
    title.toLowerCase(),
    title,
    title.replace(/[^\w\s]/g, '').toLowerCase(),
    title.replace(/[^\w\s]/g, ''),
    title.replace(/[.,;:!?]/g, '').toLowerCase(),
    title.replace(/[.,;:!?]/g, ''),
    titleBase,
    titleBase.replace(/s$/, ''), // Remove trailing 's'
    titleBase + 's', // Add trailing 's'
  ];
  
  // Look for headers that match the title (## or ###)
  const headerRegex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  
  while ((match = headerRegex.exec(content)) !== null) {
    const headerText = match[2].trim();
    
    // Check if this header matches any title variation
    const headerBase = headerText.toLowerCase().replace(/[^\w\s]/g, '').trim();
    const headerVariations = [
      headerText.toLowerCase(),
      headerText,
      headerText.replace(/[^\w\s]/g, '').toLowerCase(),
      headerText.replace(/[^\w\s]/g, ''),
      headerText.replace(/[.,;:!?]/g, '').toLowerCase(),
      headerText.replace(/[.,;:!?]/g, ''),
      headerBase,
      headerBase.replace(/s$/, ''), // Remove trailing 's'
      headerBase + 's', // Add trailing 's'
    ];
    
    for (const titleVar of titleVariations) {
      for (const headerVar of headerVariations) {
        if (titleVar === headerVar) {
          foundDuplicates.push({
            file,
            title,
            header: headerText,
            line: content.substring(0, match.index).split('\n').length
          });
          console.log(`🔍 Found duplicate in ${file}:`);
          console.log(`   Title: "${title}"`);
          console.log(`   Header: "${headerText}"`);
          console.log(`   Line: ${content.substring(0, match.index).split('\n').length}\n`);
          break;
        }
      }
      if (foundDuplicates.some(d => d.file === file && d.header === headerText)) break;
    }
  }
});

if (foundDuplicates.length === 0) {
  console.log('✅ No duplicate headers found!');
} else {
  console.log(`\n📊 Summary: Found ${foundDuplicates.length} duplicate headers to remove.`);
}

module.exports = foundDuplicates;