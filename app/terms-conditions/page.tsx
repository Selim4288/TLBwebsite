import Link from "next/link"

export default function TermsConditionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">
              These terms govern your use of Tech Leads BD Ltd. services and products. Please read them carefully before using our services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing or using the services, software products, or website of Tech Leads BD Ltd. ("Company," "we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-gray-600">
                  These terms constitute a legally binding agreement between you and Tech Leads BD Ltd. regarding the use of our services.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-600 mb-4">
                  Tech Leads BD Ltd. provides software development, implementation, and support services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>ERP Software Solutions</li>
                  <li>Point of Sale (POS) Systems</li>
                  <li>Accounting Software</li>
                  <li>HR and Payroll Management Systems</li>
                  <li>Customer Relationship Management (CRM) Software</li>
                  <li>Inventory Management Systems</li>
                  <li>Hospital Management Systems</li>
                  <li>Custom Software Development</li>
                  <li>Web and Mobile Application Development</li>
                  <li>Cloud Hosting Services</li>
                  <li>Technical Support Services</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
                <p className="text-gray-600 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Not engage in any activity that could harm our systems or services</li>
                  <li>Not attempt to reverse engineer, decompile, or decode our software</li>
                  <li>Respect intellectual property rights and licensing terms</li>
                  <li>Pay all applicable fees and charges in a timely manner</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content, features, and functionality on our website and in our software products, including text, graphics, logos, and software code, are the exclusive property of Tech Leads BD Ltd. and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-600">
                  Custom software developed specifically for a client becomes the property of that client upon full payment, unless otherwise specified in a separate agreement. Our proprietary frameworks and components remain our intellectual property.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Project-based work: Payment schedule as specified in the project agreement</li>
                  <li>Subscription services: Monthly or annual billing in advance</li>
                  <li>Late payments may incur a service suspension or late fees</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We reserve the right to modify pricing with 30 days' notice for subscription services.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Level Agreement</h2>
                <p className="text-gray-600 mb-4">
                  We are committed to providing reliable and high-quality services. Our service level commitments include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Cloud hosting uptime of 99.5% or higher</li>
                  <li>Technical support response within 24 hours during business days</li>
                  <li>Critical issue resolution within 48 hours</li>
                  <li>Regular software updates and security patches</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, Tech Leads BD Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services.
                </p>
                <p className="text-gray-600">
                  Our total liability for any claim arising from these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim in the 12 months preceding the claim.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>
                <p className="text-gray-600 mb-4">
                  We warrant that our services will be performed with reasonable skill and care. However, we do not guarantee that:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Our services will meet all of your specific requirements</li>
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>Our software will be compatible with all hardware or third-party software</li>
                  <li>Any defects will be corrected</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  EXCEPT AS EXPRESSLY PROVIDED HEREIN, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidentiality</h2>
                <p className="text-gray-600">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This includes business strategies, technical information, customer data, and pricing information. Confidentiality obligations survive the termination of any service agreement.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-600 mb-4">
                  Either party may terminate service agreements under the following conditions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Upon completion of the contracted services</li>
                  <li>With 30 days' written notice for ongoing services</li>
                  <li>Immediately for material breach of these terms</li>
                  <li>Immediately for non-payment of fees</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Upon termination, you must cease using our services and return or destroy any confidential materials provided.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms. We will provide notice of significant changes via email or website announcement.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For questions about these Terms and Conditions, please contact us:
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
                <Link href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View Privacy Policy
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
