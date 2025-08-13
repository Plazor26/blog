-- Create posts table for blog functionality
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);

-- Create index on published posts ordered by published_at
CREATE INDEX IF NOT EXISTS idx_posts_published ON public.posts(published, published_at DESC);

-- Insert sample post
INSERT INTO public.posts (title, slug, excerpt, content, tags, published, published_at)
VALUES (
  'First DB Post',
  'first-db-post',
  'DB-only rendering confirmed.',
  '## Hello

This is our first post stored in Supabase!

Inline math: $E = mc^2$

Block math:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

The blog now fetches content directly from the database.',
  ARRAY['intro', 'database'],
  true,
  NOW()
);
