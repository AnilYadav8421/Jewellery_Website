import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/jewelery_assets/assets'

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-12">

            {/* Page Title */}
            <div className="text-center mb-12">
                <Title text="About Us" />
                <p className="text-sm text-gray-600 mt-1">
                    Crafting Jewellery With Heart, Heritage & Precision.
                </p>
            </div>

            {/* Hero Section */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 border border-gray-100">
                <img
                    src={assets.aboutus}
                    alt="About Us"
                    className="w-full md:max-w-[420px] rounded-2xl object-cover shadow-md"
                />

                <div className="flex flex-col justify-center text-gray-700 gap-6 text-base leading-relaxed">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Welcome to Sai Shraddha Jewellers Pvt. Ltd.
                    </h2>

                    <p>
                        Established in <strong>2000</strong>, Sai Shraddha Jewellers Pvt. Ltd. is a family-run
                        jewellery house built on trust, tradition, and timeless craftsmanship.
                        What started as a humble dream has today become a cherished destination
                        for jewellery lovers across the region.
                    </p>

                    <p>
                        With an inspiring legacy of <strong>25</strong> years, we have mastered
                        the art of designing pieces that not only enhance your beauty but also
                        narrate a story of culture, love, and elegance.
                    </p>

                    <p>
                        From everyday essentials to exquisite bridal masterpieces, every piece we
                        create reflects precision, purity, and passion — crafted to last
                        generations.
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-5xl mx-auto mt-16 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Sai Shraddha Jewellers Pvt. Ltd. began with a vision — to make premium, pure and
                    beautifully designed jewellery accessible to every family.
                    Over the years, we have embraced modern technology while preserving our
                    traditional artistry, ensuring unmatched quality and authenticity.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to create jewellery that celebrates your life's
                        unforgettable moments. Every ring, bracelet, necklace, or bangle you
                        choose becomes a part of your story — crafted with unmatched purity,
                        precision, and passion.
                    </p>
                </div>

                <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We aim to be a symbol of trust, quality, and innovation in the jewellery
                        world. Our vision is to blend tradition with modern aesthetics and
                        deliver jewellery that resonates with every generation.
                    </p>
                </div>
            </div>

            {/* Craftsmanship Section */}
            <div className="max-w-6xl mx-auto mt-16">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Craftsmanship That Speaks</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Every ornament we create is handcrafted by highly skilled artisans who
                        carry generations of experience. We ensure:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>100% certified gold & silver purity</li>
                        <li>Modern machine finishing with traditional handwork</li>
                        <li>Unique designs crafted to enhance elegance</li>
                        <li>Stringent quality checks & accurate weight transparency</li>
                        <li>Custom jewellery designing for your special occasions</li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-6xl mx-auto mt-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Sai Shraddha Jewellers Pvt. Ltd.?</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Trusted Purity</h4>
                        <p className="text-gray-700 text-sm">Accurate weight, genuine hallmarking, and full transparency.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Exclusive Designs</h4>
                        <p className="text-gray-700 text-sm">Classic, modern, and customized designs for every occasion.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Customer-Centric Service</h4>
                        <p className="text-gray-700 text-sm">We treat every customer like family — your trust is our pride.</p>
                    </div>
                </div>
            </div>

            {/* Footer Quote */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
                <p className="text-lg italic text-gray-600">
                    “Jewellery is not just an ornament — it is an emotion,
                    a memory, a legacy.”
                </p>
            </div>

        </div>
    )
}

export default AboutUs
