# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 2 personal website and blog. The owner wants to rewrite it in modern Next.js to be cleaner, more mobile friendly, and require less work to add new posts.

## Current Architecture

- **Framework**: Vue 2.6 with Vue Router and Vuetify
- **Build Tool**: Vue CLI Service
- **Server**: Express.js static file server
- **Blog Posts**: Hardcoded as JavaScript files exporting HTML strings
- **Deployment**: Serves static files from `/dist` directory

## Key Commands

```bash
# Development server
npm run serve

# Production build
npm run build

# Linting (runs automatically on pre-commit)
npm run lint

# Start production server
npm run start
```

## Code Structure

### Blog Post System
- Posts are stored as individual JS files in `src/posts/` (1.js through 21.js)
- Each post exports an HTML string as default
- Posts are imported and configured in `src/posts.js` with metadata (title, path, category, date)
- Two categories: "life" and "crypto" (shown as "Work" in UI)
- Posts are sorted by date in descending order

### Routing
- Main routes defined in `src/router.js`:
  - `/` - About page
  - `/writing` - Life posts
  - `/writing-work` - Work/crypto posts
  - Individual post routes generated dynamically from posts array

### Key Files
- `src/App.vue`: Main layout with navigation
- `src/views/About.vue`: About page content
- `src/views/Writing.vue`: Life posts listing
- `src/views/WritingCrypto.vue`: Work posts listing
- `src/views/Post.vue`: Individual post display component

## Migration Considerations for Next.js

1. **Blog Posts**: Convert HTML string exports to MDX or Markdown files
2. **Routing**: Use Next.js file-based routing instead of Vue Router
3. **Styling**: Current app uses Vuetify - consider Tailwind CSS or similar for Next.js
4. **Static Generation**: Leverage Next.js SSG for blog posts
5. **Content Management**: Consider using a simpler system like MDX files in a posts directory