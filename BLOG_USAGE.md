# Blog System Usage Guide

This website has been refactored to focus on blog content with a local-only editing capability.

## Overview

- **Content Collections**: Blog posts are stored as Markdown files in `src/content/blog/`
- **Dark Theme**: All pages respect the dark theme set via `class="dark"` on the `<html>` tag
- **Local Editing**: In development mode only, you can edit blog posts directly in the browser
- **Production**: The editor is completely disabled in production builds

## Creating New Blog Posts

### Method 1: Manually Create Markdown Files

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 2025-10-16
draft: false
author: sjarmak
tags: [tag1, tag2]
---

Your markdown content here...
```

### Method 2: Use the Dev Editor (Development Only)

1. Run `npm run dev`
2. Visit any blog post page (e.g., `http://localhost:4321/blog/lpi-broken-links`)
3. Click "Toggle Editor" at the bottom of the page
4. Edit the markdown content in the textarea
5. Click "Save" to write changes back to the file
6. The page will automatically reload via HMR

## File Structure

```
src/
├── content/
│   ├── config.ts          # Content Collections schema definition
│   └── blog/              # Blog post markdown files
│       └── *.md
├── pages/
│   ├── index.astro        # Home page (shows 3 recent posts)
│   ├── blog/
│   │   ├── index.astro    # Blog index (all posts)
│   │   └── [slug].astro   # Individual blog post template
│   ├── projects.astro     # Redirects to /blog
│   └── api/
│       └── dev/
│           └── blog/
│               └── [slug].ts  # Dev-only API for editing
├── components/
│   └── DevPostEditor.astro    # Dev-only editor component
└── layouts/
    └── BaseLayout.astro       # Updated navigation
```

## Routes

- `/` - Home page with recent posts
- `/blog` - Full blog index
- `/blog/{slug}` - Individual blog posts
- `/projects` - Redirects to `/blog`

## Development Commands

```bash
# Start dev server (enables editing)
npm run dev

# Build for production (disables editing)
npm run build

# Preview production build
npm run preview
```

## Security Notes

- The dev editor API only works when `import.meta.env.DEV` is true
- In production builds, the API returns 404
- The editor component is only rendered in development mode
- Slug validation prevents path traversal attacks
- Only files matching `/^[a-z0-9-]+$/i` can be accessed

## Content Collections Schema

Posts must include these fields:
- `title` (string, required)
- `description` (string, optional)
- `date` (date, required)
- `draft` (boolean, defaults to false)
- `author` (string, defaults to 'sjarmak')
- `tags` (array of strings, optional)

## Styling

- Uses Tailwind CSS with dark mode enabled
- Blog content styled with `@tailwindcss/typography` plugin
- All prose content uses `prose-invert` for dark theme compatibility
- Custom color tokens from shadcn-ui design system
