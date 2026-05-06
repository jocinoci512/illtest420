export interface Page {
  id: string
  slug: string
  title: string
  published: boolean
  created_at: string
  updated_at: string
}

export interface PageSection {
  id: string
  page_id: string
  section_key: string
  content: Record<string, any>
  sort_order: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  body: string
  excerpt: string
  featured_image: string | null
  status: 'draft' | 'published'
  author_name: string
  category: string
  seo_title: string | null
  seo_description: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  role: string
  visible: boolean
  sort_order: number
}

export interface MembershipTier {
  id: string
  name: string
  description: string
  features: string[]
  visible: boolean
  sort_order: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  visible: boolean
  sort_order: number
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  message: string
  read: boolean
  created_at: string
}

export interface MembershipApplication {
  id: string
  full_name: string
  email: string
  phone: string
  country: string
  occupation: string
  preferred_tier: string
  message: string
  status: 'pending' | 'reviewed' | 'accepted' | 'declined'
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  active: boolean
  created_at: string
}

export interface SiteSetting {
  key: string
  value: Record<string, any>
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  location: 'header' | 'footer'
  sort_order: number
  parent_id: string | null
}

export interface Media {
  id: string
  filename: string
  url: string
  alt_text: string
  size_bytes: number
  created_at: string
}

export interface SEOMetadata {
  id: string
  page_slug: string
  title: string
  description: string
  og_image: string | null
}
