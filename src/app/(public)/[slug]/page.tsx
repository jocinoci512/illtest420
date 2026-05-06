import { Metadata } from "next";
import { notFound } from "next/navigation";

// Mock dynamic pages content
const dynamicPages: Record<string, { title: string; body: string; seo_description: string }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    seo_description: "Read our privacy policy to understand how Elite Illuminati Official collects, uses, and protects your personal information.",
    body: `<h2>Introduction</h2><p>Elite Illuminati Official respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or submit forms.</p><h2>Information We Collect</h2><p>We collect information you voluntarily provide, including: name, email address, phone number, country, occupation, and any messages you submit through our forms. We also collect standard web analytics data such as IP address, browser type, and pages visited.</p><h2>How We Use Your Information</h2><p>Your information is used to: respond to your inquiries, process membership applications, send newsletter updates (if subscribed), improve our website experience, and maintain the security of our platform.</p><h2>Data Protection</h2><p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p><h2>Third-Party Sharing</h2><p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website, subject to confidentiality agreements.</p><h2>Your Rights</h2><p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@eliteilluminatiofficial.com.</p><h2>Contact</h2><p>For questions about this privacy policy, contact us at info@eliteilluminatiofficial.com.</p>`,
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    seo_description: "Review the terms and conditions for using the Elite Illuminati Official website and services.",
    body: `<h2>Acceptance of Terms</h2><p>By accessing and using the Elite Illuminati Official website, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use this website.</p><h2>Use of Website</h2><p>This website is provided for informational purposes and membership inquiry. You agree to use the website only for lawful purposes and in a manner that does not infringe upon the rights of others.</p><h2>Intellectual Property</h2><p>All content on this website, including text, graphics, logos, and images, is the property of Elite Illuminati Official and is protected by intellectual property laws. Unauthorized reproduction or distribution is prohibited.</p><h2>Membership Applications</h2><p>Submission of a membership application does not constitute acceptance or guarantee of membership. All applications are subject to review and approval at the sole discretion of the Order. The Order reserves the right to accept or decline any application without explanation.</p><h2>Limitation of Liability</h2><p>Elite Illuminati Official shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p><h2>Modifications</h2><p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p><h2>Governing Law</h2><p>These terms shall be governed by the laws of the District of Columbia, United States.</p><h2>Contact</h2><p>For questions regarding these terms, please contact info@eliteilluminatiofficial.com.</p>`,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = dynamicPages[slug];
  if (!page) return { title: "Page Not Found" };
  return {
    title: `${page.title} | Elite Illuminati Official`,
    description: page.seo_description,
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = dynamicPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-white tracking-wider mb-6">
            {page.title}
          </h1>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4">
        <div
          className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading prose-headings:text-white prose-p:text-neutral-300 prose-a:text-gold-500"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      </article>
    </>
  );
}
