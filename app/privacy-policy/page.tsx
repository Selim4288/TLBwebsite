import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how Tech Leads BD Ltd. collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 text-sm mb-8">Last Updated: June 16, 2026</p>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Tech Leads BD Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software products and services.
                </p>
                <p className="text-gray-600">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Business information (company name, job title, industry)</li>
                  <li>Account credentials (username and password)</li>
                  <li>Payment information for our services</li>
                  <li>Communications you send to us</li>
                  <li>Information you provide when requesting support or demos</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Sending technical notices, updates, and support messages</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Sending promotional communications (with your consent)</li>
                  <li>Analyzing usage patterns to improve user experience</li>
                  <li>Protecting against fraudulent or illegal activity</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information. We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>With service providers who perform services on our behalf</li>
                  <li>With business partners for joint offerings (with your consent)</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us at info@techleadsbd.com.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
                </p>
                <p className="text-gray-600">
                  The types of cookies we use include essential cookies (required for site functionality), analytics cookies (to understand how visitors interact with our site), and marketing cookies (to deliver relevant advertisements).
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-800 font-semibold mb-2">Tech Leads BD Ltd.</p>
                  <p className="text-gray-600">Near DC Office, Moffazel Tower</p>
                  <p className="text-gray-600">Station Road, Faridpur-7800</p>
                  <p className="text-gray-600 mt-2">Phone: +8801713636759, +8801732640831</p>
                  <p className="text-gray-600">Email: info@techleadsbd.com</p>
                </div>
              </div>

              <div className="flex gap-4 pt-8 border-t border-gray-200">
                <Link href="/terms-conditions" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View Terms & Conditions
                </Link>
                <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
