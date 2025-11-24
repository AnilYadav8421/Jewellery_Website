import React from "react";

const RefundPolicy = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Refund & Cancellation Policy</h1>

            <p className="mb-4">
                At Sai Shraddha Jewellers, customer satisfaction is our priority. Please read our
                refund and cancellation guidelines carefully.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. Eligibility for Returns</h2>
            <p>
                Products can be returned only if they are damaged, defective, or incorrect upon
                delivery. The item must be unused and in original packaging.
            </p>

            <h2 className="text-xl font-semibold mt-6">2. Non-Returnable Items</h2>
            <ul className="list-disc ml-6">
                <li>Customized jewellery</li>
                <li>Engraved items</li>
                <li>Worn or damaged products after delivery</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Refund Process</h2>
            <p>
                Once approved, refunds will be processed within 7–10 business days to the original
                payment method.
            </p>

            <h2 className="text-xl font-semibold mt-6">4. Order Cancellation</h2>
            <p>
                Orders can be canceled before dispatch. Customized orders cannot be canceled once
                production starts.
            </p>

            <h2 className="text-xl font-semibold mt-6">5. Exchange Policy</h2>
            <p>
                Exchanges are available for eligible items. Additional charges may apply based on
                gold rate differences.
            </p>

            <h2 className="text-xl font-semibold mt-6">6. Contact Support</h2>
            <p>
                For any return, refund, or exchange requests, please contact our customer support
                team with order details and proof of issue.
            </p>
        </div>
    );
};

export default RefundPolicy;
