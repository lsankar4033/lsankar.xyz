# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js personal website and blog. The site features a clean, mobile-friendly design with easy blog post management using MDX files.

## Architecture

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with Typography plugin
- **Fonts**: IBM Plex Sans (body) and Work Sans (headings)
- **Content**: MDX files for blog posts with frontmatter
- **TypeScript**: Full TypeScript support throughout

## Key Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Create new blog post
npm run new-post
```

## Project Structure

### Core Directories
- `app/` - Next.js app directory with pages and layouts
- `components/` - React components (Navigation, etc.)
- `content/posts/` - MDX blog posts with frontmatter
- `lib/` - Utility functions for post management
- `scripts/` - Helper scripts for post conversion and creation

### Blog Post System
- Posts are stored as MDX files in `content/posts/`
- Each post has frontmatter with title, date, and category
- Two categories: "work" and "life"
- Posts are automatically sorted by date (newest first)
- Easy creation via `npm run new-post` script

### Key Files
- `app/layout.tsx` - Root layout with navigation and fonts
- `app/page.tsx` - About page (homepage)
- `app/work/page.tsx` - Work posts listing
- `app/life/page.tsx` - Life posts listing
- `app/posts/[slug]/page.tsx` - Individual post pages
- `lib/posts.ts` - Post management utilities
- `components/Navigation.tsx` - Site navigation

## Content Management

### Adding New Posts
1. Use `npm run new-post` for interactive creation
2. Or manually create `.mdx` files in `content/posts/` with proper frontmatter:

```mdx
---
title: "Post Title"
date: "2024-01-01"
category: "work" # or "life"
---

Your markdown content here...
```

### Post Processing
- Posts are processed from MDX to HTML at build time
- Automatic date sorting and categorization
- Support for all standard markdown features
- Images can be included via standard markdown syntax

## Typography and Design
- IBM Plex Sans for body text (thoughtful, readable)
- Work Sans for headings and navigation
- Reduced font weights for refined appearance
- Mobile-first responsive design
- Clean, minimal aesthetic

## Development Notes
- Uses Next.js static generation for optimal performance
- All posts are pre-rendered at build time
- TypeScript ensures type safety throughout
- Tailwind CSS for consistent styling