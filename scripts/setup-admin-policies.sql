-- Create admins table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create is_admin function
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admins 
    WHERE admins.user_id = $1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Ensure admin row for your UID (replace with your actual UID)
INSERT INTO public.admins (user_id)
VALUES ('292a3735-18f4-4556-89bd-faa05303b0df')
ON CONFLICT (user_id) DO NOTHING;

-- Admin can read all posts (drafts too)
DROP POLICY IF EXISTS "admin_read_all" ON public.posts;
CREATE POLICY "admin_read_all" ON public.posts
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

-- Admin can insert posts
DROP POLICY IF EXISTS "admin_insert_posts" ON public.posts;
CREATE POLICY "admin_insert_posts" ON public.posts
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin(auth.uid()));

-- Admin can update posts
DROP POLICY IF EXISTS "admin_update_posts" ON public.posts;
CREATE POLICY "admin_update_posts" ON public.posts
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Admin can delete posts
DROP POLICY IF EXISTS "admin_delete_posts" ON public.posts;
CREATE POLICY "admin_delete_posts" ON public.posts
FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));

-- Public can read only published posts
DROP POLICY IF EXISTS "read_published_posts" ON public.posts;
CREATE POLICY "read_published_posts" ON public.posts
FOR SELECT
TO public
USING (published = true);

-- Storage policies for 'images' bucket
DROP POLICY IF EXISTS "public_read_images" ON storage.objects;
CREATE POLICY "public_read_images" ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'images');

DROP POLICY IF EXISTS "admin_write_images" ON storage.objects;
CREATE POLICY "admin_write_images" ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images' AND public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "admin_delete_images" ON storage.objects;
CREATE POLICY "admin_delete_images" ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'images' AND public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "admin_update_images" ON storage.objects;
CREATE POLICY "admin_update_images" ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'images' AND public.is_admin(auth.uid()))
WITH CHECK (bucket_id = 'images' AND public.is_admin(auth.uid()));
