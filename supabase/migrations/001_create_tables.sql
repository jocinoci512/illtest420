-- Elite Illuminati Official - Database Schema
-- Migration 001: Create all tables

-- Pages table
CREATE TABLE pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page sections (ordered content blocks per page)
CREATE TABLE page_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  section_key VARCHAR(255) NOT NULL,
  content JSONB DEFAULT '{}',
  sort_order INTEGER DEFAULT 0,
  UNIQUE(page_id, section_key)
);

-- Blog posts
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(500) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  body TEXT DEFAULT '',
  excerpt TEXT DEFAULT '',
  featured_image TEXT,
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_name VARCHAR(255) DEFAULT 'Elite Illuminati Official',
  category VARCHAR(255) DEFAULT 'General',
  seo_title VARCHAR(500),
  seo_description TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Testimonials
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quote TEXT NOT NULL,
  role VARCHAR(255) DEFAULT '',
  visible BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0
);

-- Membership tiers (NO price column - inquiry based)
CREATE TABLE membership_tiers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT DEFAULT '',
  features JSONB DEFAULT '[]',
  visible BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0
);

-- FAQs
CREATE TABLE faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(255) DEFAULT 'General',
  visible BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0
);

-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(500) NOT NULL,
  email VARCHAR(500) NOT NULL,
  phone VARCHAR(100) DEFAULT '',
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Membership applications
CREATE TABLE membership_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(500) NOT NULL,
  email VARCHAR(500) NOT NULL,
  phone VARCHAR(100) DEFAULT '',
  country VARCHAR(255) DEFAULT '',
  occupation VARCHAR(255) DEFAULT '',
  preferred_tier VARCHAR(255) DEFAULT '',
  message TEXT DEFAULT '',
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'declined')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(500) UNIQUE NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Site settings (key-value store)
CREATE TABLE site_settings (
  key VARCHAR(255) PRIMARY KEY,
  value JSONB DEFAULT '{}'
);

-- Navigation items
CREATE TABLE navigation_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  label VARCHAR(255) NOT NULL,
  href VARCHAR(500) NOT NULL,
  location VARCHAR(20) DEFAULT 'header' CHECK (location IN ('header', 'footer')),
  sort_order INTEGER DEFAULT 0,
  parent_id UUID REFERENCES navigation_items(id) ON DELETE SET NULL
);

-- Media library
CREATE TABLE media (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  filename VARCHAR(500) NOT NULL,
  url TEXT NOT NULL,
  alt_text VARCHAR(500) DEFAULT '',
  size_bytes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEO metadata per page
CREATE TABLE seo_metadata (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) DEFAULT '',
  description TEXT DEFAULT '',
  og_image TEXT
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to pages
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to blog_posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
