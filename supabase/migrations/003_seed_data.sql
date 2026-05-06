-- Elite Illuminati Official - Seed Data
-- Migration 003: Initial content

-- Insert pages
INSERT INTO pages (slug, title, published) VALUES
('home', 'Home', true),
('about', 'About Us', true),
('beliefs', 'Our Beliefs', true),
('join', 'Join the Order', true),
('blog', 'Insights & Wisdom', true),
('contact', 'Contact Us', true),
('privacy-policy', 'Privacy Policy', true),
('terms-conditions', 'Terms & Conditions', true),
('thank-you', 'Thank You', true);

-- Insert home page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'home'), 'hero', '{
  "headline": "The Order Awaits",
  "subheadline": "For centuries, the most powerful minds have shaped civilization from the shadows. The time has come for you to see beyond the veil.",
  "cta_primary": {"text": "Begin Your Journey", "href": "/join"},
  "cta_secondary": {"text": "Discover More", "href": "/about"}
}', 1),
((SELECT id FROM pages WHERE slug = 'home'), 'who_we_are', '{
  "title": "Who We Are",
  "description": "Founded in the Age of Enlightenment, Elite Illuminati Official represents the continuation of a timeless legacy. We are an assembly of visionaries, leaders, and seekers of truth united by a singular purpose: to illuminate the path of human progress through wisdom, influence, and unwavering commitment to excellence.",
  "highlight": "We do not follow the world. We shape it."
}', 2),
((SELECT id FROM pages WHERE slug = 'home'), 'mission', '{
  "title": "Our Mission",
  "description": "To cultivate a global network of enlightened minds committed to advancing human civilization through knowledge, strategic influence, and the preservation of ancient wisdom for future generations.",
  "points": ["Illuminate the path of human progress", "Unite exceptional minds across borders", "Preserve and advance sacred knowledge", "Guide civilization toward its highest potential"]
}', 3),
((SELECT id FROM pages WHERE slug = 'home'), 'pillars', '{
  "title": "The Four Pillars",
  "items": [
    {"title": "Omniscience", "description": "True power lies in knowledge. We seek understanding that transcends ordinary perception, illuminating truths hidden from the uninitiated.", "icon": "eye"},
    {"title": "Strategy", "description": "Every great civilization was built upon the foundations of careful planning. We think in centuries, not moments.", "icon": "compass"},
    {"title": "Influence", "description": "The greatest changes are those made silently. We guide the currents of history with precision and purpose.", "icon": "crown"},
    {"title": "Perpetuity", "description": "While others fade, we endure. Our legacy spans generations, each building upon the wisdom of those who came before.", "icon": "infinity"}
  ]
}', 4),
((SELECT id FROM pages WHERE slug = 'home'), 'testimonials', '{
  "title": "Words from the Enlightened"
}', 5),
((SELECT id FROM pages WHERE slug = 'home'), 'blog_preview', '{
  "title": "Latest Insights",
  "subtitle": "Wisdom from within the Order"
}', 6),
((SELECT id FROM pages WHERE slug = 'home'), 'newsletter', '{
  "title": "Stay Informed",
  "description": "Receive exclusive insights and announcements from the Order.",
  "placeholder": "Enter your email address",
  "button_text": "Subscribe"
}', 7),
((SELECT id FROM pages WHERE slug = 'home'), 'final_cta', '{
  "title": "Your Awakening Begins Here",
  "description": "The path to enlightenment is not for everyone. But for those who are ready, the Order stands prepared to guide you into a world few have ever seen.",
  "cta": {"text": "Apply for Consideration", "href": "/join"}
}', 8);

-- Insert about page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'about'), 'hero', '{
  "headline": "Our Legacy",
  "subheadline": "A history spanning centuries. A purpose that transcends time."
}', 1),
((SELECT id FROM pages WHERE slug = 'about'), 'origins', '{
  "title": "Our Origins",
  "content": "On May 1, 1776, in the halls of Ingolstadt, Bavaria, a group of extraordinary minds gathered with a radical vision: to create a society dedicated to the advancement of human knowledge, free from the constraints of dogma, superstition, and tyranny. Founded by Adam Weishaupt, a professor of natural and canon law, the Order of the Illuminati was born not from darkness, but from light — the light of reason, truth, and boundless human potential."
}', 2),
((SELECT id FROM pages WHERE slug = 'about'), 'mission', '{
  "title": "Our Mission",
  "content": "We exist to unite the most exceptional minds across every discipline and border. Our mission is threefold: to preserve ancient wisdom that would otherwise be lost to time, to cultivate new knowledge that propels civilization forward, and to ensure that the forces of enlightenment prevail over ignorance in every generation.",
  "pillars": [
    {"title": "Enlightenment", "description": "Freeing humanity from the chains of ignorance through the pursuit of absolute truth."},
    {"title": "Unity", "description": "Building bridges between nations, cultures, and disciplines to advance our collective potential."},
    {"title": "Stewardship", "description": "Guiding the course of human progress with wisdom, patience, and foresight."}
  ]
}', 3),
((SELECT id FROM pages WHERE slug = 'about'), 'philosophy', '{
  "title": "Our Philosophy",
  "content": "We believe that knowledge is the ultimate form of power — not power over others, but the power to transform oneself and, in doing so, transform the world. Our philosophy holds that every individual contains within them the seed of greatness, waiting only for the proper conditions to flourish. The Order provides those conditions: mentorship, access to ancient and modern wisdom, and a community of peers who challenge and elevate one another."
}', 4),
((SELECT id FROM pages WHERE slug = 'about'), 'timeline', '{
  "title": "A Journey Through Time",
  "events": [
    {"year": "1776", "title": "The Founding", "description": "The Order is established in Ingolstadt, Bavaria, with the goal of promoting rational thought and opposing superstition."},
    {"year": "1785", "title": "The Dissolution", "description": "The Bavarian government officially bans the Order. Members disperse across Europe, carrying the flame of enlightenment with them."},
    {"year": "1800s", "title": "The Shadow Era", "description": "The Order operates in complete secrecy, with members embedded in the intellectual and political movements shaping the modern world."},
    {"year": "1900s", "title": "Global Expansion", "description": "As the world becomes interconnected, the Order expands its reach across continents, adapting to the new age while preserving its core principles."},
    {"year": "Present", "title": "The Digital Age", "description": "The Order embraces modern technology to connect members worldwide while maintaining the sacred traditions that define us."}
  ]
}', 5),
((SELECT id FROM pages WHERE slug = 'about'), 'why_we_exist', '{
  "title": "Why We Exist",
  "content": "In an age of information overload and spiritual poverty, the need for an organization like ours has never been greater. We exist because humanity deserves guides — not rulers, but illuminators. We exist because the greatest truths are not found on the surface, but in the depths that only the dedicated can reach. We exist because the future belongs to those bold enough to shape it."
}', 6),
((SELECT id FROM pages WHERE slug = 'about'), 'cta', '{
  "title": "Ready to Learn More?",
  "description": "The path to understanding begins with a single step.",
  "cta": {"text": "Explore Our Beliefs", "href": "/beliefs"}
}', 7);

-- Insert beliefs page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'beliefs'), 'hero', '{
  "headline": "Our Beliefs",
  "subheadline": "The principles that have guided the Order for over two centuries."
}', 1),
((SELECT id FROM pages WHERE slug = 'beliefs'), 'core_principles', '{
  "title": "Core Principles",
  "description": "These six pillars form the foundation of everything we believe and everything we do.",
  "principles": [
    {"title": "Omniscience", "description": "The relentless pursuit of knowledge in all its forms. We believe that true understanding requires seeing beyond the surface of things, questioning every assumption, and seeking wisdom wherever it may be found.", "icon": "eye"},
    {"title": "Strategic Influence", "description": "The power to shape events lies not in force, but in foresight. We cultivate the ability to see patterns, anticipate change, and position ourselves to guide outcomes toward the greater good.", "icon": "target"},
    {"title": "Global Stewardship", "description": "We are custodians of human progress. Our responsibility extends beyond borders and generations — we act today with the welfare of tomorrow in mind.", "icon": "globe"},
    {"title": "Perpetual Existence", "description": "Ideas are immortal. The Order endures because its purpose transcends any single generation. We build upon the work of those before us and plant seeds for those who will follow.", "icon": "infinity"},
    {"title": "Balance of Power", "description": "True stability requires equilibrium. We work to ensure that no single force — whether political, economic, or ideological — dominates unchecked.", "icon": "scale"},
    {"title": "Enlightenment", "description": "The ultimate goal of all our efforts: to bring light where there is darkness, clarity where there is confusion, and truth where there is deception.", "icon": "sun"}
  ]
}', 2),
((SELECT id FROM pages WHERE slug = 'beliefs'), 'knowledge', '{
  "title": "The Pursuit of Knowledge",
  "content": "We believe that knowledge is sacred. Not merely academic learning, but deep understanding — the kind that transforms perception and empowers action. Our members study not just what is known, but seek to discover what remains hidden. From ancient mystery traditions to cutting-edge scientific research, we embrace all paths to truth.",
  "areas": ["Sacred Geometry & Symbolism", "Philosophy & Ethics", "Leadership & Governance", "Economics & Wealth Creation", "Science & Technology", "Human Psychology & Potential"]
}', 3),
((SELECT id FROM pages WHERE slug = 'beliefs'), 'brotherhood', '{
  "title": "Brotherhood & Unity",
  "content": "No individual, however gifted, can achieve true greatness in isolation. The Order provides a brotherhood — a network of exceptional minds united by shared purpose. Within our ranks, there are no divisions of nation, race, or creed. There is only the shared pursuit of excellence and the mutual commitment to one another''s growth."
}', 4),
((SELECT id FROM pages WHERE slug = 'beliefs'), 'leadership', '{
  "title": "Enlightened Leadership",
  "content": "We believe the world needs leaders who think beyond the next election cycle or quarterly report. Our members are trained to think in terms of decades and centuries — to consider the long-term consequences of every decision and to lead with wisdom rather than impulse. True leadership is service: service to truth, to progress, and to humanity."
}', 5),
((SELECT id FROM pages WHERE slug = 'beliefs'), 'wealth_growth', '{
  "title": "Wealth & Abundance",
  "content": "We do not view wealth as an end in itself, but as a tool for creating lasting change. Financial abundance, properly directed, can fund research, education, infrastructure, and initiatives that elevate entire communities. Our members are taught to create value, build sustainable wealth, and deploy resources with strategic purpose."
}', 6),
((SELECT id FROM pages WHERE slug = 'beliefs'), 'modern_purpose', '{
  "title": "Our Purpose in the Modern Age",
  "content": "The challenges of the twenty-first century demand a new kind of leadership. In an era of unprecedented technological change, geopolitical complexity, and existential risk, the world needs organizations capable of long-term thinking and decisive action. The Order stands ready — as it has for centuries — to guide humanity through uncertainty toward a brighter future.",
  "cta": {"text": "Begin Your Application", "href": "/join"}
}', 7);

-- Insert join/membership page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'join'), 'hero', '{
  "headline": "Join the Order",
  "subheadline": "Membership is by invitation and application only. Only those deemed ready will be considered."
}', 1),
((SELECT id FROM pages WHERE slug = 'join'), 'overview', '{
  "title": "Membership Overview",
  "content": "Joining Elite Illuminati Official is not a transaction — it is a transformation. Membership in the Order is extended to individuals who demonstrate exceptional character, ambition, intellectual curiosity, and alignment with our core principles. We do not accept all who apply. Every application undergoes rigorous review by our Council of Elders.",
  "notice": "Submission of an application does not guarantee acceptance. All candidates are evaluated based on merit, character, and readiness."
}', 2),
((SELECT id FROM pages WHERE slug = 'join'), 'tiers', '{
  "title": "Paths of Initiation"
}', 3),
((SELECT id FROM pages WHERE slug = 'join'), 'process', '{
  "title": "The Application Process",
  "steps": [
    {"number": 1, "title": "Submit Your Application", "description": "Complete the application form below with honest and thoughtful responses. The Council values authenticity above all."},
    {"number": 2, "title": "Application Review", "description": "Your application will be reviewed by the Council of Elders. This process typically requires four to six weeks."},
    {"number": 3, "title": "Background Evaluation", "description": "Approved candidates proceed to a thorough evaluation of character, accomplishments, and potential contribution to the Order."},
    {"number": 4, "title": "Council Interview", "description": "Select candidates will be invited to a private interview with current members to assess alignment with our values and vision."},
    {"number": 5, "title": "Initiation", "description": "Accepted candidates receive their formal invitation and begin their journey within the Order through a private initiation."}
  ]
}', 4),
((SELECT id FROM pages WHERE slug = 'join'), 'benefits', '{
  "title": "What Membership Offers",
  "items": [
    "Access to exclusive knowledge and teachings",
    "Personal mentorship from senior members",
    "Global network of accomplished individuals",
    "Invitations to private gatherings and summits",
    "Resources for personal and professional growth",
    "Guidance on wealth creation and preservation",
    "Brotherhood and lifelong connections"
  ]
}', 5),
((SELECT id FROM pages WHERE slug = 'join'), 'faq', '{
  "title": "Frequently Asked Questions"
}', 6),
((SELECT id FROM pages WHERE slug = 'join'), 'application_form', '{
  "title": "Submit Your Application",
  "description": "Complete the form below to begin the consideration process. All fields are required.",
  "fields": ["full_name", "email", "phone", "country", "occupation", "message"]
}', 7);

-- Insert contact page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'contact'), 'hero', '{
  "headline": "Contact Us",
  "subheadline": "We welcome sincere inquiries from those seeking truth and enlightenment."
}', 1),
((SELECT id FROM pages WHERE slug = 'contact'), 'form', '{
  "title": "Send a Message",
  "description": "Use the form below to reach our communications office. All messages are reviewed and responded to in the order they are received."
}', 2),
((SELECT id FROM pages WHERE slug = 'contact'), 'info', '{
  "title": "Other Ways to Reach Us",
  "email": "info@eliteilluminatiofficial.com",
  "phone": "+1 (202) 555-0147",
  "address": "600 14th Street NW, Suite 500, Washington, DC 20005",
  "hours": "Monday through Friday, 9:00 AM to 5:00 PM EST"
}', 3);

-- Insert privacy policy page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'privacy-policy'), 'content', '{
  "title": "Privacy Policy",
  "body": "<h2>Introduction</h2><p>Elite Illuminati Official respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or submit forms.</p><h2>Information We Collect</h2><p>We collect information you voluntarily provide, including: name, email address, phone number, country, occupation, and any messages you submit through our forms. We also collect standard web analytics data such as IP address, browser type, and pages visited.</p><h2>How We Use Your Information</h2><p>Your information is used to: respond to your inquiries, process membership applications, send newsletter updates (if subscribed), improve our website experience, and maintain the security of our platform.</p><h2>Data Protection</h2><p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p><h2>Third-Party Sharing</h2><p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website, subject to confidentiality agreements.</p><h2>Your Rights</h2><p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@eliteilluminatiofficial.com.</p><h2>Contact</h2><p>For questions about this privacy policy, contact us at info@eliteilluminatiofficial.com.</p>"
}', 1);

-- Insert terms page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'terms-conditions'), 'content', '{
  "title": "Terms & Conditions",
  "body": "<h2>Acceptance of Terms</h2><p>By accessing and using the Elite Illuminati Official website, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use this website.</p><h2>Use of Website</h2><p>This website is provided for informational purposes and membership inquiry. You agree to use the website only for lawful purposes and in a manner that does not infringe upon the rights of others.</p><h2>Intellectual Property</h2><p>All content on this website, including text, graphics, logos, and images, is the property of Elite Illuminati Official and is protected by intellectual property laws. Unauthorized reproduction or distribution is prohibited.</p><h2>Membership Applications</h2><p>Submission of a membership application does not constitute acceptance or guarantee of membership. All applications are subject to review and approval at the sole discretion of the Order. The Order reserves the right to accept or decline any application without explanation.</p><h2>Limitation of Liability</h2><p>Elite Illuminati Official shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p><h2>Modifications</h2><p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p><h2>Governing Law</h2><p>These terms shall be governed by the laws of the District of Columbia, United States.</p><h2>Contact</h2><p>For questions regarding these terms, please contact info@eliteilluminatiofficial.com.</p>"
}', 1);

-- Insert thank you page sections
INSERT INTO page_sections (page_id, section_key, content, sort_order) VALUES
((SELECT id FROM pages WHERE slug = 'thank-you'), 'content', '{
  "title": "Thank You",
  "message": "Your submission has been received. Our team will review your message and respond in due course. The Order values every sincere inquiry.",
  "cta": {"text": "Return to Homepage", "href": "/"}
}', 1);

-- Insert testimonials
INSERT INTO testimonials (name, quote, role, visible, sort_order) VALUES
('Initiate A.R.', 'Joining the Order was the single most transformative decision of my life. The knowledge, the connections, the clarity — nothing in the outside world compares.', 'Member since 2018', true, 1),
('Brother K.M.', 'I came seeking answers and found a brotherhood that challenges me to become the best version of myself every single day. The Order delivers what it promises.', 'Member since 2015', true, 2),
('Sister V.L.', 'The wisdom I have gained through the Order has transformed not only my career but my entire understanding of what is possible. This is real enlightenment.', 'Member since 2020', true, 3);

-- Insert membership tiers (NO PRICES - inquiry based)
INSERT INTO membership_tiers (name, description, features, visible, sort_order) VALUES
('Neophyte', 'The beginning of your journey. As a Neophyte, you will receive foundational teachings and access to our introductory materials.', '["Introductory knowledge materials", "Quarterly communications from the Order", "Access to foundational symbolism guide", "Invitation to local chapter gatherings", "Assignment of a personal mentor"]', true, 1),
('Illuminatus', 'For those who have demonstrated commitment and growth. Illuminatus members gain access to deeper teachings and broader connections.', '["All Neophyte privileges", "Advanced knowledge and teaching materials", "Invitation to annual Global Summit", "Direct mentorship from senior members", "Access to the Order network worldwide", "Priority consideration for leadership roles"]', true, 2),
('Master', 'The highest level of initiation. Masters are the guardians of our most sacred knowledge and the architects of our long-term vision.', '["All Illuminatus privileges", "Private consultations with Order leadership", "Access to restricted archives and teachings", "Participation in strategic planning councils", "Eligibility for Elder Council nomination", "Legacy preservation and succession planning"]', true, 3);

-- Insert FAQs
INSERT INTO faqs (question, answer, category, visible, sort_order) VALUES
('How do I join Elite Illuminati Official?', 'Membership begins with submitting an application through our website. All applications are reviewed by the Council of Elders. Acceptance is based on character, ambition, and alignment with our principles.', 'Membership', true, 1),
('Is there a fee to apply?', 'There is no fee to submit an application. The application process is free and open to all sincere seekers.', 'Membership', true, 2),
('How long does the application review take?', 'The initial review typically requires four to six weeks. Candidates who advance to further stages will be contacted directly.', 'Membership', true, 3),
('Is membership guaranteed after applying?', 'No. Membership is selective and not guaranteed. The Order accepts only those deemed ready and aligned with our values. All decisions are final.', 'Membership', true, 4),
('Is Elite Illuminati Official a real organization?', 'Yes. We are a legitimate fraternal organization dedicated to personal development, networking, and the advancement of human knowledge.', 'General', true, 5),
('What are the benefits of membership?', 'Members gain access to exclusive knowledge, personal mentorship, a global network of accomplished individuals, private events, and resources for personal and professional growth.', 'Membership', true, 6),
('Can I remain anonymous as a member?', 'We respect the privacy of all members. Your membership status is confidential and will never be disclosed without your explicit consent.', 'Privacy', true, 7),
('How do I contact the Order?', 'You can reach us through the contact form on our website or by emailing info@eliteilluminatiofficial.com.', 'General', true, 8);

-- Insert site settings
INSERT INTO site_settings (key, value) VALUES
('site_name', '"Elite Illuminati Official"'),
('site_description', '"A global fraternal organization dedicated to the advancement of human knowledge, leadership, and enlightenment."'),
('contact_email', '"info@eliteilluminatiofficial.com"'),
('contact_phone', '"+1 (202) 555-0147"'),
('contact_address', '"600 14th Street NW, Suite 500, Washington, DC 20005"'),
('social_links', '{"twitter": "#", "instagram": "#", "facebook": "#", "linkedin": "#"}'),
('footer_description', '"Elite Illuminati Official is a fraternal organization dedicated to enlightenment, knowledge, and the advancement of human potential. Founded in 1776."'),
('copyright_text', '"© 2024 Elite Illuminati Official. All rights reserved."');

-- Insert navigation items (header)
INSERT INTO navigation_items (label, href, location, sort_order) VALUES
('Home', '/', 'header', 1),
('About', '/about', 'header', 2),
('Beliefs', '/beliefs', 'header', 3),
('Join', '/join', 'header', 4),
('Blog', '/blog', 'header', 5),
('Contact', '/contact', 'header', 6);

-- Insert navigation items (footer)
INSERT INTO navigation_items (label, href, location, sort_order) VALUES
('About Us', '/about', 'footer', 1),
('Our Beliefs', '/beliefs', 'footer', 2),
('Join the Order', '/join', 'footer', 3),
('Blog', '/blog', 'footer', 4),
('Contact', '/contact', 'footer', 5),
('Privacy Policy', '/privacy-policy', 'footer', 6),
('Terms & Conditions', '/terms-conditions', 'footer', 7);

-- Insert SEO metadata
INSERT INTO seo_metadata (page_slug, title, description) VALUES
('home', 'Elite Illuminati Official | The Order Awaits', 'Join the world''s most exclusive fraternal organization. Elite Illuminati Official has guided visionary minds since 1776. Begin your journey toward enlightenment today.'),
('about', 'About Us | Elite Illuminati Official', 'Discover the history, mission, and philosophy of Elite Illuminati Official. Founded in 1776, we unite exceptional minds in the pursuit of knowledge and human advancement.'),
('beliefs', 'Our Beliefs | Elite Illuminati Official', 'Explore the core principles and philosophy of Elite Illuminati Official. Omniscience, strategic influence, global stewardship, and enlightenment guide everything we do.'),
('join', 'Join the Order | Elite Illuminati Official', 'Apply for membership in Elite Illuminati Official. Learn about our application process, membership paths, and what the Order offers to those deemed ready.'),
('blog', 'Insights & Wisdom | Elite Illuminati Official Blog', 'Read the latest insights, teachings, and wisdom from Elite Illuminati Official. Knowledge shared for seekers of truth.'),
('contact', 'Contact Us | Elite Illuminati Official', 'Reach out to Elite Illuminati Official. We welcome sincere inquiries from those seeking truth, knowledge, and enlightenment.'),
('privacy-policy', 'Privacy Policy | Elite Illuminati Official', 'Read our privacy policy to understand how Elite Illuminati Official collects, uses, and protects your personal information.'),
('terms-conditions', 'Terms & Conditions | Elite Illuminati Official', 'Review the terms and conditions for using the Elite Illuminati Official website and services.');

-- Insert sample blog posts
INSERT INTO blog_posts (slug, title, body, excerpt, status, author_name, category, seo_title, seo_description, published_at) VALUES
('the-power-of-knowledge', 'The Power of Knowledge: Why the Enlightened Never Stop Learning', '<p>In an age where information is abundant yet wisdom remains scarce, the true seeker understands that knowledge is not merely the accumulation of facts. It is the transformation of understanding into action, of data into insight, of learning into power.</p><p>The founders of our Order recognized this truth over two centuries ago. Adam Weishaupt wrote that "the most perfect government would be that which would lead all men to that state in which they could govern themselves." This self-governance begins with self-knowledge — and self-knowledge requires relentless, disciplined study.</p><p>Today, as our members span every continent and discipline, this principle remains unchanged. Whether studying quantum physics or ancient philosophy, our members share a common trait: the refusal to accept the surface of things as the whole truth.</p><h2>The Three Levels of Knowledge</h2><p>Within the Order, we teach that knowledge operates on three distinct levels:</p><p><strong>Surface Knowledge</strong> — what the world presents to the casual observer. This is the realm of headlines, popular opinion, and conventional wisdom.</p><p><strong>Structural Knowledge</strong> — understanding the systems, patterns, and forces that create surface-level reality. This is where strategy lives.</p><p><strong>Essential Knowledge</strong> — the deepest truths about nature, humanity, and existence itself. This is the domain of the enlightened.</p><p>Most people never progress beyond the first level. Members of the Order are trained to operate at all three simultaneously.</p><h2>Your Path Forward</h2><p>Begin today. Choose a subject that calls to you — one that frightens you with its depth. Read widely. Question everything. Seek teachers who challenge rather than comfort you. This is the way of the enlightened.</p>', 'In an age where information is abundant yet wisdom remains scarce, the true seeker understands that knowledge is not merely the accumulation of facts.', 'published', 'Elite Illuminati Official', 'Knowledge', 'The Power of Knowledge | Elite Illuminati Official', 'Discover why the enlightened never stop learning. Explore the three levels of knowledge taught within Elite Illuminati Official.', NOW() - INTERVAL '3 days'),

('leadership-in-uncertain-times', 'Leadership in Uncertain Times: Lessons from the Order', '<p>The twenty-first century presents challenges unprecedented in human history. Climate instability, technological disruption, geopolitical fragmentation, and social upheaval test the limits of conventional leadership. Yet for those trained in the ways of the Order, uncertainty is not a threat — it is an opportunity.</p><p>For over two hundred years, our members have navigated periods of radical change. From the upheavals of the French Revolution to the dawn of the nuclear age, from the fall of empires to the rise of the digital world, the Order has adapted, guided, and endured.</p><h2>Principles of Enlightened Leadership</h2><p><strong>Think in Centuries</strong> — Short-term thinking is the enemy of true progress. The enlightened leader considers not just the immediate impact of decisions, but their consequences across generations.</p><p><strong>Embrace Complexity</strong> — The world is not simple, and those who seek simple answers will always be outmaneuvered by those who understand nuance. Embrace paradox. Hold multiple truths simultaneously.</p><p><strong>Lead from Within</strong> — The most powerful leaders are those who have mastered themselves before attempting to guide others. Self-discipline, self-awareness, and self-honesty are prerequisites for all external influence.</p><p><strong>Build Networks, Not Hierarchies</strong> — Rigid structures break under pressure. The Order endures because it is a network — flexible, distributed, and resilient. Build your organizations the same way.</p><h2>The Call to Lead</h2><p>If you feel the pull of leadership — not for ego, but for purpose — the Order may have a place for you. True leaders do not seek power for its own sake. They accept the burden of responsibility because they understand that the alternative — leaving the future to chance — is unacceptable.</p>', 'The twenty-first century presents challenges unprecedented in human history. For those trained in the ways of the Order, uncertainty is not a threat — it is an opportunity.', 'published', 'Elite Illuminati Official', 'Leadership', 'Leadership in Uncertain Times | Elite Illuminati Official', 'Explore timeless leadership principles from Elite Illuminati Official. Learn how enlightened leaders navigate complexity and build lasting influence.', NOW() - INTERVAL '7 days'),

('the-meaning-of-brotherhood', 'The Sacred Bond: Understanding Brotherhood in the Order', '<p>In a world that increasingly isolates individuals behind screens and algorithms, the ancient concept of brotherhood has never been more vital. Within Elite Illuminati Official, brotherhood is not merely a word — it is a living covenant between members that transcends ordinary friendship.</p><p>When you enter the Order, you enter a network of individuals who are genuinely invested in your growth, your success, and your awakening. This is not networking in the corporate sense. It is something far deeper: a mutual commitment to one another''s evolution.</p><h2>What Brotherhood Means Within the Order</h2><p><strong>Accountability</strong> — Your brothers and sisters hold you to the highest standard. Not to judge, but to ensure you become everything you are capable of becoming.</p><p><strong>Support</strong> — In moments of difficulty, you are never alone. The Order rallies around its members in times of need — not with empty words, but with tangible action.</p><p><strong>Challenge</strong> — Comfort breeds mediocrity. Within the Order, you will be challenged intellectually, spiritually, and practically. This is done with love, but without mercy for complacency.</p><p><strong>Confidentiality</strong> — What is shared within the brotherhood stays within the brotherhood. This creates a space of absolute trust where true vulnerability and growth become possible.</p><h2>Beyond Borders</h2><p>Our brotherhood spans every continent, every culture, and every background. Within these walls, there are no strangers — only brothers and sisters united by purpose. This global family is perhaps the Order''s greatest gift to its members.</p>', 'In a world that increasingly isolates individuals, the ancient concept of brotherhood has never been more vital. Within Elite Illuminati Official, brotherhood is a living covenant.', 'published', 'Elite Illuminati Official', 'Brotherhood', 'The Sacred Bond of Brotherhood | Elite Illuminati Official', 'Understand what true brotherhood means within Elite Illuminati Official. Discover the deep bonds that unite members across the globe.', NOW() - INTERVAL '14 days');
