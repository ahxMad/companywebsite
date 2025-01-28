'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfService() {
  return (
    <div className="flex flex-col items-center justify-start p-8 bg-background space-y-8">
      <h1 className="text-5xl font-bold mb-6 text-black">Terms of Service</h1>

      <div className="w-full max-w-5xl">
        {/* Introduction Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              Welcome to MindTube<sup>&trade;</sup>, a service designed to aide creators with their workflow and instantly get in their flow. By accessing or using our services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
            </p>
          </CardContent>
        </Card>

        {/* Account Creation and Responsibilities Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Account Creation and Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              To access and use our service, you must create an account. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
            </p>
            <p className="text-base">
              You agree to provide accurate and up-to-date information during registration, and to notify us immediately if you believe your account has been compromised.
            </p>
          </CardContent>
        </Card>

        {/* Usage and Restrictions Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Usage and Restrictions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              You agree to use our service in accordance with all applicable laws and regulations. You are prohibited from:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-base">Engaging in any illegal activities through our service.</li>
              <li className="text-base">Interfering with the proper functioning of our service.</li>
              <li className="text-base">Using our service to distribute harmful or malicious content.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Payment and Subscription Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Payment and Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              Our service operates on a subscription basis. By subscribing to our service, you agree to pay the subscription fees associated with your chosen plan.
            </p>
            <p className="text-base">
              Payments will be charged to your account on a recurring basis, according to the terms of your plan. You can cancel or modify your subscription at any time, but fees are non-refundable.
            </p>
          </CardContent>
        </Card>

        {/* Refund Policy Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Refund Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              All sales are final. We do not offer refunds at this time, except as required by law or in cases of service failure on our part. Please review your subscription carefully before making a purchase.
            </p>
          </CardContent>
        </Card>

        {/* Service Termination Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Service Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We may suspend or terminate your access to the service at any time, for any reason, including violations of these Terms of Service. Upon termination, your access to the service will be revoked.
            </p>
            <p className="text-base">
              You may also terminate your account at any time by following the account cancellation instructions in your settings.
            </p>
          </CardContent>
        </Card>

        {/* Limitation of Liability Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising out of your use of our service. Our liability is limited to the amount paid for the service in the last 12 months.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law and Dispute Resolution Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Governing Law and Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from or related to these Terms shall be resolved through binding arbitration.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms Section */}
        <Card className="p-8 space-y-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">
              We reserve the right to modify or update these Terms of Service at any time. Any changes will be posted on this page with the date of the latest revision. Your continued use of our service after such changes constitutes your acceptance of the new terms.
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
              If you have any questions or concerns about these Terms of Service, please contact us at:
            </p>
            <p className="font-bold text-lg">Email: mind.aide.ltd@gmail.com</p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
