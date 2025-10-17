# Stephen Jarmak - Personal Website

A modern, static website built with Astro featuring a blog, project showcase, and clean design.

## Features

- ✅ Static site generation with Astro
- ✅ Tailwind CSS for styling
- ✅ SEO-friendly with meta tags and OpenGraph
- ✅ RSS feed support
- ✅ Sitemap generation
- ✅ Fast, accessible, and maintainable

## 🚀 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable Astro components
│   ├── layouts/            # Page layout components
│   ├── pages/              # Route pages (*.astro)
│   │   ├── blog/           # Blog pages
│   │   │   ├── index.astro # Blog listing
│   │   │   ├── welcome.astro
│   │   │   └── building-with-nextjs.astro
│   │   ├── index.astro     # Home page
│   │   ├── about.astro     # About page
│   │   ├── projects.astro  # Projects page
│   │   ├── contact.astro   # Contact page
│   │   └── rss.xml.js      # RSS feed
│   └── consts.ts           # Site configuration
├── astro.config.mjs        # Astro configuration
├── render.yaml             # Render deployment config
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` files in the `src/pages/` directory. Each file becomes a route based on its path.

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |

## 🚀 Deployment

This site is configured for deployment on Render.com:

1. Connect your GitHub repository to Render
2. Use the `render.yaml` configuration
3. Set the build command to `npm run build`
4. Set the publish directory to `./dist`
5. Map the custom domain `sjarmak.ai`

## 📝 Adding Content

- **Blog Posts**: Create new `.astro` files in `src/pages/blog/`
- **Pages**: Add new `.astro` files in `src/pages/`
- **Components**: Add reusable components in `src/components/`

## 🏗️ Built With

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Deployment**: Render (static hosting)
- **Content**: Markdown with code syntax highlighting
