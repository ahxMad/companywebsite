'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-start p-8 bg-background space-y-8">
      <h1 className="text-5xl font-bold mb-6 text-black">Privacy Policy</h1>

      <div className="w-full max-w-5xl">
        {/* Introduction Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              This Privacy Policy explains how MindAide<sup>&trade;</sup> (`&quot;we`&quot;, `&quot;our`&quot;, or `&quot;us`&quot;) collects, uses, and shares personal information about you when you use our services. By using our website and services, you agree to the practices described in this Privacy Policy.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We collect the following types of information:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-base">Personal information you provide (e.g. name, email address and phone number).</li>
              <li className="text-base">Account-related information (e.g. username, password and subscription plan).</li>
              <li className="text-base">Usage data (e.g. how you interact with our website and services).</li>
              <li className="text-base">Payment information (e.g. billing address, payment details for subscriptions).</li>
            </ul>
          </CardContent>
        </Card>

        {/* How We Use Your Information Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-base">To provide and personalize our services.</li>
              <li className="text-base">To process payments and manage subscriptions.</li>
              <li className="text-base">To improve our website and services based on your usage patterns.</li>
              <li className="text-base">To send you promotional emails or newsletters (with your consent).</li>
              <li className="text-base">To respond to your inquiries and provide customer support.</li>
            </ul>
          </CardContent>
        </Card>

        {/* How We Share Your Information Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">How We Share Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We may share your personal information in the following ways:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-base">With third-party service providers who assist us with processing payments or providing customer support.</li>
              <li className="text-base">With legal authorities, if required by law or to protect our rights.</li>
              <li className="text-base">In the event of a merger or acquisition, your information may be transferred to the new entity.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Retention Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. If you delete your account, we will remove your personal information from our active systems, although some data may remain in our backups for a limited period.
            </p>
          </CardContent>
        </Card>

        {/* Your Data Protection Rights Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Your Data Protection Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-base">The right to access your personal data.</li>
              <li className="text-base">The right to correct any inaccuracies in your personal data.</li>
              <li className="text-base">The right to request the deletion of your personal data (subject to certain exceptions).</li>
              <li className="text-base">The right to object to or restrict certain processing activities of your personal data.</li>
              <li className="text-base">The right to withdraw your consent to data processing (where applicable).</li>
            </ul>
            <p className="text-base">
              If you wish to exercise any of these rights, please contact us at the contact information provided below.
            </p>
          </CardContent>
        </Card>

        {/* Security Measures Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Security Measures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We take reasonable measures to protect your personal information from unauthorized access, alteration, and disclosure. However, please be aware that no method of data transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Changes to Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at:
            </p>
            <p className="font-bold text-lg">Email: contact@mindaide.co</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
