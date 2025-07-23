import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/jewelery_assets/assets'

const AboutUs = () => {
    return (
        <div className="min-h-screen px-4 py-10 bg-gray-50">
            {/* Page Title */}
            <div className="text-center mb-8">
                <Title text="About Us" />
                <p className="text-sm text-gray-600 mt-1">Elegance. Legacy. Craftsmanship.</p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
                <img
                    src={assets.aboutus}
                    alt="About Us"
                    className="w-full md:max-w-[350px] rounded-2xl object-cover shadow-sm"
                />

                <div className="flex flex-col justify-center text-gray-700 gap-6 md:w-2/3 text-sm md:text-base leading-relaxed">
                    <p>
                        <strong className="text-gray-900">Sai Shraddha Jewellers</strong> is a family-owned business established in <em>[Year]</em>. With a passion for craftsmanship and an eye for detail, we offer a wide range of exquisite jewellery tailored to every taste and tradition.
                    </p>

                    <p>
                        With a legacy of <em>[Number of Years]</em> years, we have built a reputation rooted in trust, quality, and elegant design. Our pieces speak of tradition, love, and timeless style.
                    </p>

                    <div>
                        <h2 className="font-semibold text-gray-900 mb-1 text-lg">Our Mission</h2>
                        <p>
                            Our mission is to celebrate life’s precious moments with jewellery that radiates timeless beauty. Whether it's an engagement ring symbolizing love, a necklace that completes your look, or earrings that define your elegance — every piece is crafted to reflect your unique story.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
