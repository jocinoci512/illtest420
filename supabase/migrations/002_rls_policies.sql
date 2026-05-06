-- Elite Illuminati Official - RLS Policies
-- Migration 002: Row Level Security

-- Enable RLS on all tables
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_metadata ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ POLICIES (for published/visible content)

CREATE POLICY "Public can read published pages" ON pages
  FOR SELECT USING (published = true);

CREATE POLICY "Public can read sections of published pages" ON page_sections
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM pages WHERE pages.id = page_sections.page_id AND pages.published = true)
  );

CREATE POLICY "Public can read published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public can read visible testimonials" ON testimonials
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read visible membership tiers" ON membership_tiers
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read visible FAQs" ON faqs
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read navigation items" ON navigation_items
  FOR SELECT USING (true);

CREATE POLICY "Public can read SEO metadata" ON seo_metadata
  FOR SELECT USING (true);

CREATE POLICY "Public can read site settings" ON site_settings
  FOR SELECT USING (true);

-- PUBLIC INSERT POLICIES (for form submissions)

CREATE POLICY "Public can submit contact forms" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can submit membership applications" ON membership_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- AUTHENTICATED (ADMIN) FULL ACCESS POLICIES

CREATE POLICY "Admin full access to pages" ON pages
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to page_sections" ON page_sections
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to blog_posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to membership_tiers" ON membership_tiers
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to faqs" ON faqs
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to contact_submissions" ON contact_submissions
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to membership_applications" ON membership_applications
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to newsletter_subscribers" ON newsletter_subscribers
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to site_settings" ON site_settings
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to navigation_items" ON navigation_items
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to media" ON media
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access to seo_metadata" ON seo_metadata
  FOR ALL USING (auth.role() = 'authenticated');
