'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using our platform, you agree to be bound by these Terms of Service ("Terms"). Our platform allows sellers to connect and manage their online stores (e.g., Etsy, Shopify) through a unified interface, using tools powered by Vercel Analytics, Vercel Speed Insights, Vercel Hosting, Supabase for data storage, and Clerk for authentication. These Terms govern your access to and use of our website, services, and tools, including payment processing via Stripe. If you do not agree with any part of these Terms, you must not use our services. We reserve the right to update these Terms at any time, and continued use after changes constitutes acceptance of the updated Terms.`,
      summary: `You agree to these Terms by using our platform, which connects stores and uses Vercel, Supabase, Clerk, and Stripe. We may update Terms; continued use means acceptance.`,
    },
    {
      title: '2. User Eligibility',
      content: `You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our platform, you represent that you meet these requirements and have verified your age during account creation via Clerk. Our services are not intended for minors, and we may terminate accounts if we discover use by individuals under 18. You are responsible for ensuring that your use of our services complies with all applicable laws and regulations in your jurisdiction, including Norwegian and EU laws. If you are using our platform on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms.`,
      summary: `Users must be 18+ and verify age via Clerk. Services aren’t for minors. You’re responsible for legal compliance and business authority.`,
    },
    {
      title: '3. Account Responsibilities',
      content: `To use our services, you must create an account via Clerk, our authentication provider, and provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to notify us immediately of any unauthorized access or use of your account. We are not liable for any loss or damage arising from your failure to protect your account credentials or from issues with Clerk’s authentication services. You may not share your account with others or use another user’s account without permission.`,
      summary: `Create an account via Clerk with accurate info, keep credentials confidential, and notify us of unauthorized access. We’re not liable for breaches or Clerk issues.`,
    },
    {
      title: '4. Store Integration and Data',
      content: `Our platform enables you to connect third-party stores (e.g., Etsy, Shopify) to manage products, orders, and analytics. You grant us permission to access, process, and store data from these integrations as necessary to provide our services, using Supabase for secure data storage. You are responsible for ensuring you have the right to share this data and that it complies with the terms of the third-party platforms. We use Vercel Analytics and Speed Insights to optimize performance, and data collected may be used to improve our services, in accordance with our Privacy Policy. We are not liable for interruptions caused by changes to third-party platforms’ APIs, terms, or availability, or by Supabase’s services.`,
      summary: `You allow us to access and store third-party store data via Supabase. Ensure compliance with third-party terms; we use analytics and aren’t liable for third-party or Supabase issues.`,
    },
    {
      title: '5. Prohibited Activities',
      content: `You agree not to engage in activities that may harm our platform, its users, or third-party services, including Vercel, Supabase, Clerk, Stripe, Etsy, or Shopify. Prohibited activities include, but are not limited to: attempting to gain unauthorized access to our systems or Supabase databases, uploading malicious code, violating intellectual property rights, or using our services for illegal purposes. We reserve the right to suspend or terminate your account for violations of these Terms, without prior notice, and to cooperate with legal authorities if necessary.`,
      summary: `Don’t harm our platform, users, or third-party services like Supabase or Clerk. We may suspend accounts for violations and cooperate with authorities.`,
    },
    {
      title: '6. Termination',
      content: `We may terminate or suspend your access to our services, including your Clerk account and Supabase-stored data, at our discretion, with or without cause, and with or without notice. You may also terminate your account at any time by contacting us. Upon termination, your right to use our services ceases, and we may delete your data, subject to our Privacy Policy and applicable laws (e.g., GDPR, CCPA). Provisions of these Terms that by their nature should survive termination (e.g., liability, disclaimers) will remain in effect.`,
      summary: `We or you may terminate your account anytime. Access stops, data may be deleted per laws, and some Terms survive termination.`,
    },
    {
      title: '7. Limitation of Liability',
      content: `Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee that our platform, or third-party services like Vercel, Supabase, Clerk, or Stripe, will be uninterrupted, error-free, or secure. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of our services, including loss of profits or data. Our total liability for any claim will not exceed the amount you paid us in the preceding 12 months.`,
      summary: `Services are "as is," no warranties. We’re not liable for indirect damages or third-party issues; liability is capped at fees paid in the last 12 months.`,
    },
    {
      title: '8. Governing Law',
      content: `These Terms are governed by the laws of Norway, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of our services will be resolved in the courts of Trondheim or Oslo, Norway. You agree to submit to the jurisdiction of these courts. We encourage resolving disputes through mediation or the EU Online Dispute Resolution platform (http://ec.europa.eu/odr) before escalating to courts. If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.`,
      summary: `Norwegian law governs; disputes go to Trondheim or Oslo courts or EU ODR platform. Unenforceable provisions don’t affect the rest of the Terms.`,
    },
    {
      title: '9. Data Protection (GDPR)',
      content: `As a Norway-based platform, we comply with the General Data Protection Regulation (GDPR). You have the right to access, rectify, erase, restrict processing, or object to the processing of your personal data, and to data portability. We process data from connected stores (e.g., Etsy, Shopify) and user accounts (via Clerk) based on your consent or to fulfill our contract with you, storing it securely in Supabase. Data may be transferred to third-party providers like Vercel, Clerk, or Stripe, subject to Standard Contractual Clauses or other GDPR-compliant safeguards. We retain data only as long as necessary for our services or as required by law. For details, see our Privacy Policy. Contact us at support@platform.com for data protection inquiries.`,
      summary: `We comply with GDPR, granting you data rights. Data is processed via Clerk and Supabase, with safeguards for transfers to third parties.`,
    },
    {
      title: '10. California Data Protection (CCPA/CPRA)',
      content: `If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA). You may request to know, delete, or opt out of the sale or sharing of your personal information. We do not sell your data, but we may share it with third-party providers like Vercel, Supabase, Clerk, or Stripe for service purposes, as disclosed in our Privacy Policy. To exercise your rights, contact us at support@platform.com. We will respond within the timeframes required by law (e.g., 45 days). We do not discriminate against users who exercise their CCPA/CPRA rights.`,
      summary: `California users have CCPA/CPRA rights to know, delete, or opt out of data sharing. We don’t sell data and respond to requests per law.`,
    },
    {
      title: '11. Payments and Refunds (Stripe)',
      content: `If you subscribe to premium features, you agree to pay the fees outlined at checkout, including any applicable taxes (e.g., VAT for EU users, sales tax for U.S. users), which may be collected via Stripe, our third-party payment provider, subject to Stripe’s terms (https://stripe.com/legal). You must provide accurate billing information and authorize recurring payments if applicable. You are responsible for any taxes or duties associated with your use of our services, and we may include these in your invoice as required by law. Refunds are subject to our refund policy, available on our website. For billing disputes, contact us within 30 days at support@platform.com. We are not liable for errors or interruptions caused by Stripe’s services.`,
      summary: `Pay fees and taxes via Stripe for premium features. Provide accurate billing info; refunds per our policy. Disputes must be raised within 30 days.`,
    },
    {
      title: '12. Intellectual Property',
      content: `You retain ownership of content you upload to our platform (e.g., product listings, images), but grant us a non-exclusive, worldwide, royalty-free license to use, display, and process it, including storage in Supabase, to provide and promote our services. Our platform, including its software, logo, and design, is protected by copyright, trademark, and other laws. You may not reproduce, distribute, or create derivative works of our intellectual property without permission. If you believe your IP rights are infringed, contact us at support@platform.com.`,
      summary: `You own your content but grant us a license to use and store it via Supabase. Our platform’s IP is protected; contact us for IP disputes.`,
    },
    {
      title: '13. Consumer Protections',
      content: `As a Norway-based platform, we comply with Norwegian consumer laws, including the Consumer Rights Act and E-Commerce Act. If you are an individual seller purchasing premium features, you may have a 14-day cooling-off period to cancel digital services, starting from the date of purchase, unless you expressly consent to immediate access and waive this right. Pricing and contract terms are clearly disclosed at checkout, and all fees (including taxes) are presented before purchase. For complaints, contact us at support@platform.com or use the EU Online Dispute Resolution platform (http://ec.europa.eu/odr).`,
      summary: `Norwegian consumer laws apply. Individual sellers may have a 14-day cancellation period; pricing is transparent. Contact us or use EU ODR for complaints.`,
    },
    {
      title: '14. Force Majeure',
      content: `We are not liable for delays or failures in providing our services due to events beyond our reasonable control, including but not limited to natural disasters, server outages, cyber-attacks, or failures of third-party services like Vercel, Supabase, Clerk, Stripe, Etsy, or Shopify. We will take reasonable steps to mitigate such events and notify you if they significantly impact our services. Your obligations, such as payment for services already rendered, remain unaffected.`,
      summary: `We’re not liable for service issues due to uncontrollable events or third-party failures like Supabase or Clerk. Payment obligations remain.`,
    },
    {
      title: '15. Third-Party Services',
      content: `Our platform relies on third-party services, including Etsy, Shopify, Stripe, Vercel, Supabase, and Clerk, to function. We are not responsible for their availability, performance, or changes to their terms, APIs, or services. You agree to comply with the terms of these third-party providers, including Clerk’s terms (https://clerk.com/terms) and Supabase’s terms (https://supabase.com/terms), when using our platform. Any disputes or issues arising from third-party services must be resolved directly with those providers. Our Privacy Policy details how data is shared with these services.`,
      summary: `We’re not liable for third-party services like Supabase or Clerk. You must comply with their terms and resolve disputes directly with them.`,
    },
    {
      title: '16. Indemnification',
      content: `You agree to indemnify and hold us, our affiliates, and our partners harmless from any claims, losses, or damages, including legal fees, arising from your use of our services, violation of these Terms, or infringement of third-party rights (e.g., intellectual property, data privacy). This includes claims related to your connected stores, data shared with us, or misuse of Supabase or Clerk services. We reserve the right to assume the defense of any claim for which we are entitled to indemnification.`,
      summary: `You indemnify us for claims from your use, violations, or third-party rights issues, including Supabase or Clerk misuse. We may defend claims.`,
    },
    {
      title: '17. Entire Agreement',
      content: `These Terms, together with our Privacy Policy and any other agreements expressly referenced, constitute the entire agreement between you and us regarding your use of our services. They supersede any prior agreements or understandings, whether written or oral. Any additional terms we provide for specific features (e.g., premium plans) will supplement these Terms. If we fail to enforce any part of these Terms, it does not constitute a waiver of our rights.`,
      summary: `These Terms and referenced policies are the full agreement, superseding prior ones. Non-enforcement isn’t a waiver.`,
    },
    {
      title: '18. Accessibility',
      content: `We are committed to making our platform accessible to all users, in compliance with the EU Web Accessibility Directive and other applicable laws. Our website is designed with semantic HTML, focus states, and responsive layouts to support users with disabilities. If you encounter accessibility issues or need assistance, contact us at support@platform.com. We will address reported issues promptly to improve your experience.`,
      summary: `We aim for accessibility per EU laws, using accessible design. Contact us for issues, and we’ll address them promptly.`,
    },
    {
      title: '19. User Content Moderation',
      content: `You are responsible for ensuring that content you upload (e.g., product listings, images) complies with applicable laws and does not infringe third-party rights or contain illegal, offensive, or harmful material. We reserve the right to review, remove, or restrict content that violates these Terms or our policies, without prior notice. If you believe content infringes your rights (e.g., copyright), submit a takedown request to support@platform.com, including details required under applicable laws (e.g., DMCA for U.S. users). We will process requests promptly and in accordance with legal requirements.`,
      summary: `Your content must be legal and non-infringing. We may remove violating content. Submit takedown requests for infringements.`,
    },
    {
      title: '20. Service Availability',
      content: `We strive to maintain our platform’s availability but do not guarantee uninterrupted or error-free service, especially given reliance on third-party services like Vercel, Supabase, Clerk, Stripe, Etsy, and Shopify. Scheduled maintenance or unexpected downtime may occur, and we will notify you of significant disruptions where feasible. For support, contact us at support@platform.com. We are not liable for losses due to downtime, as outlined in our Limitation of Liability section.`,
      summary: `We aim for availability but don’t guarantee it due to third-party reliance. Contact us for support; we’re not liable for downtime losses.`,
    },
    {
      title: '21. Export Controls and Sanctions',
      content: `You agree to comply with all applicable export control laws and sanctions, including those of Norway, the EU, and the U.S. (e.g., U.S. OFAC regulations). Our services may not be used in or by residents of countries subject to comprehensive sanctions (e.g., North Korea, Iran) or by individuals on restricted party lists. We may restrict or terminate access to comply with these laws, without liability. You represent that your use of our services does not violate export controls or sanctions.`,
      summary: `Comply with export and sanctions laws. Services are restricted in sanctioned countries or for restricted individuals.`,
    },
    {
      title: '22. Feedback and Suggestions',
      content: `If you provide feedback, suggestions, or ideas about our platform, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and incorporate them without compensation. We are not obligated to act on feedback, and you waive any claim to ownership or rights over such contributions. Feedback can be submitted to support@platform.com.`,
      summary: `Feedback grants us a license to use it freely. We’re not obligated to act, and you waive ownership claims.`,
    },
    {
      title: '23. Contact Information and Policies',
      content: `For questions, complaints, or to exercise your rights (e.g., GDPR, CCPA), contact us at support@platform.com or by mail at [Simon Leinums Veg 8B, 7088 HEIMDAL, Trondheim, Norway]. Our Privacy Policy, available at https://www.sellflow.vercel.dev/privacy, details how we collect, use, and protect your data. Other policies, such as our refund policy, are accessible on our website. We aim to respond to inquiries within 30 days, or sooner if required by law.`,
      summary: `Contact us at support@platform.com for questions or rights requests. Privacy Policy and other policies are on our website.`,
    },
  ];

  const containerRef = useRef(null);

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-3xl mx-auto text-zinc-400">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12 text-center"
        >
          Terms of Service
        </motion.h1>

        <div ref={containerRef} className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6"
              id={`section-${index}`}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100">{section.title}</h2>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-400">{section.content}</p>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 'auto' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-zinc-900 p-4 rounded-lg"
              >
                <h3 className="text-sm font-medium text-zinc-300 mb-2" id={`summary-${index}`}>
                  Summary
                </h3>
                <p className="text-sm text-zinc-400">{section.summary}</p>
              </motion.div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center text-zinc-400"
        >
          <p className="text-sm">
            Last updated: May 13, 2025. For questions, contact us at{' '}
            <a href="mailto:support@platform.com" className="text-zinc-200 hover:underline">
              support@platform.com
            </a>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}