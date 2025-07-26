# Personal Website - Next.js

Modern, mobile-friendly personal website and blog built with Next.js.

## Features

- Clean, responsive design
- MDX support for blog posts
- Easy blog post creation
- Work/Life post categorization
- Static site generation for optimal performance

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm run start
```

## Adding New Blog Posts

### Method 1: Interactive script
```bash
npm run new-post
```

This will prompt you for:
- Post title
- Category (work/life)
- Date

### Method 2: Manual creation
Create a new `.mdx` file in `content/posts/` with the following format:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
category: "work" # or "life"
---

## Your Post Title

Your markdown content here...
```

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home/About page
│   ├── work/         # Work posts listing
│   ├── life/         # Life posts listing
│   └── posts/[slug]/ # Individual post pages
├── components/       # React components
├── content/posts/    # MDX blog posts
├── lib/             # Utility functions
└── scripts/         # Helper scripts
```

## Deployment

This site is optimized for deployment on Vercel, Netlify, or any static hosting service.

### Vercel
```bash
vercel
```

### Build static export
```bash
npm run build
```

The site will be built to the `.next` directory.