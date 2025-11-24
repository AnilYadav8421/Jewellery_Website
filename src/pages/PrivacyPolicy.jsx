import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>

            <p className="mb-4">
                Sai Shraddha Jewellers is committed to protecting your privacy. This Privacy Policy
                outlines how we collect, use, and safeguard your personal information.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
            <ul className="list-disc ml-6">
                <li>Name, email, phone number</li>
                <li>Billing and shipping address</li>
                <li>Order history and preferences</li>
                <li>Website usage and device information</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6">
                <li>To process and deliver orders</li>
                <li>To provide updates and notifications</li>
                <li>To improve website experience</li>
                <li>For customer support and service</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Payment Security</h2>
            <p>
                All online payments are handled through secure and encrypted payment gateways.
                We do not store your card or banking details.
            </p>

            <h2 className="text-xl font-semibold mt-6">4. Sharing of Information</h2>
            <p>
                We never sell or trade your personal data. Information is shared only with trusted
                service providers like courier partners for fulfilling your order.
            </p>

            <h2 className="text-xl font-semibold mt-6">5. Cookies</h2>
            <p>
                Our website uses cookies to enhance your browsing experience. You can disable
                cookies anytime through browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-6">6. Updates to Policy</h2>
            <p>
                We may update this policy occasionally. Please review it periodically.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
