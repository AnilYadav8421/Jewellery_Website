import React from 'react'
import Title from '../components/Title'

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            {/* Page Title */}
            <div className="text-center mb-10">
                <Title text="Contact Us" />
                <p className="text-sm text-gray-600 mt-1">
                    We'd love to hear from you — reach out with questions, feedback or inquiries.
                </p>
            </div>

            {/* Contact Card Layout */}
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">

                {/* Contact Form */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Get in touch</h2>
                    <p className="text-sm text-gray-500 mb-6">Fill out the form and we’ll get back to you shortly.</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">Message</label>
                            <textarea
                                placeholder="Write your message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none h-28 focus:outline-none focus:ring-2 focus:ring-red-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Store Locations / Map */}
                <div className="md:w-1/2 p-8 bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">Our Stores</h2>

                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Nashik</h3>
                        <iframe
                            title="Nashik Location"
                            className="w-full h-48 rounded-lg shadow-sm"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.8106403343095!2d73.7628206583506!3d20.00562709502108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb49e3c1cf7d%3A0x81244bba3763d4c9!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        ></iframe>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Bhagur</h3>
                        <iframe
                            title="Bhagur Location"
                            className="w-full h-48 rounded-lg shadow-sm"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889.6028122633986!2d73.77875675835139!3d20.217109995253364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb06b197a69%3A0xcca79c6c2b6ebfd2!2sBhagur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
