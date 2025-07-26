#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

async function createPost() {
  console.log('Create a new blog post\n');

  const title = await prompt('Title: ');
  const dateStr = await prompt('Date (YYYY-MM-DD) [default: today]: ');

  const date = dateStr || new Date().toISOString().split('T')[0];
  const slug = slugify(title);

  const frontmatter = `---
title: "${title}"
date: "${date}"
---

`;

  const template = `${frontmatter}## ${title}

Your content here...
`;

  const postsDir = path.join(__dirname, '../content/posts');
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }

  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`\nError: Post with slug "${slug}" already exists!`);
    rl.close();
    return;
  }

  fs.writeFileSync(filePath, template);
  console.log(`\nPost created: ${filePath}`);
  console.log(`\nYou can now edit the post content in your favorite editor.`);

  rl.close();
}

createPost().catch(console.error);