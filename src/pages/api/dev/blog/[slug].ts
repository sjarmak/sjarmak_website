import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'src/content/blog');
const ALLOWED = /^[a-z0-9-]+$/i;

export async function getStaticPaths() {
  return [];
}

export const GET: APIRoute = async ({ params }) => {
  if (import.meta.env.PROD) {
    return new Response('Not found', { status: 404 });
  }

  const slug = params.slug || '';
  if (!ALLOWED.test(slug)) {
    return new Response('Bad slug', { status: 400 });
  }

  const file = path.join(ROOT, `${slug}.md`);
  try {
    const content = await fs.readFile(file, 'utf8');
    return new Response(content, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  if (import.meta.env.PROD) {
    return new Response('Not found', { status: 404 });
  }

  const slug = params.slug || '';
  if (!ALLOWED.test(slug)) {
    return new Response('Bad slug', { status: 400 });
  }

  const file = path.join(ROOT, `${slug}.md`);
  const body = await request.text();

  try {
    await fs.writeFile(file, body, 'utf8');
    return new Response('OK', { status: 200 });
  } catch (e) {
    console.error('Write failed:', e);
    return new Response('Write failed', { status: 500 });
  }
};
