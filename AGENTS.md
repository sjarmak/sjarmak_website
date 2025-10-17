# AI Agent Instructions

## Commands

- **Build**: `npm run build`
- **Dev Server**: `npm run dev`
- **Preview**: `npm run preview`

## Adding shadcn-ui Components to This Astro Project

Follow these steps in order. Complete each step before moving to the next.

### Step 1: Install React Integration
```bash
npx astro add react
```
Accept all prompts. This installs @astrojs/react and adds React support to Astro.

### Step 2: Configure Path Aliases

Update `tsconfig.json` to add path aliases:
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Update `astro.config.mjs` to add the alias:
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://sjarmak.ai',
  integrations: [react(), tailwind(), mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
```

### Step 3: Install Tailwind Animation Plugin
```bash
npm install -D tailwindcss-animate
```

### Step 4: Update Tailwind Config

Replace `tailwind.config.ts` with the following:
```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;
```

### Step 5: Create Global CSS File

Create `src/styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --ring: 217.2 32.6% 17.5%;
  }

  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
  }
}
```

### Step 6: Import Global CSS in Layout

Find your main layout file (likely in `src/layouts/`) and add this import at the top of the frontmatter:
```astro
---
import '../styles/globals.css';
---
```

### Step 7: Install Utility Dependencies
```bash
npm install clsx tailwind-merge class-variance-authority
```

### Step 8: Create Utils File

Create `src/lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Step 9: Initialize shadcn-ui
```bash
npx shadcn@latest init
```

When prompted:
- Style: **default**
- Base color: **zinc** (or your preference)
- CSS variables: **yes**
- Tailwind config: **tailwind.config.ts**
- Component location: **src/components/ui**
- Utils location: **src/lib/utils**
- React Server Components: **no**
- Aliases: 
  - Components: **@/components**
  - Utils: **@/lib/utils**

### Step 10: Add Initial Components

Start with commonly used components:
```bash
npx shadcn@latest add button card
```

Optional but recommended:
```bash
npm install lucide-react
```

### Step 11: Test a Component

Create a test page or add to an existing page:
```astro
---
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
---

<!-- Static components (no JavaScript needed) -->
<Card>
  <CardHeader>
    <CardTitle>Hello shadcn-ui</CardTitle>
  </CardHeader>
  <CardContent>
    This works!
  </CardContent>
</Card>

<!-- Interactive components need client directive -->
<Button client:load>Click me</Button>
```

### Step 12: Run Build
```bash
npm run build
```

Fix any TypeScript or build errors before proceeding.

## Usage Notes

### Static vs Interactive Components

- **Static** (no `client:*`): Rendered on server, no JavaScript sent to browser
- **Interactive** (with `client:load`): Hydrated with React on client

### Client Directives
- `client:load` - Load immediately
- `client:idle` - Load when browser is idle
- `client:visible` - Load when component is visible

### Recommended Components for Personal Website
- Button, Card, Navigation Menu, Dialog, Sheet, Tabs, Accordion, Input, Label, Separator

### Common Issues
1. **Import errors**: Check tsconfig.json and astro.config.mjs aliases match
2. **Components not interactive**: Add `client:load` or similar directive
3. **CSS not applying**: Ensure globals.css is imported in main layout
4. **Build errors**: Run `npm run build` to catch TypeScript issues early
