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

                    <form
                        className="space-y-4"
                        action="https://formspree.io/f/xvgnoqvz"
                        method="POST"
                    >
                        <div>
                            <label className="block mb-1 text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message"
                                required
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
                {/* Store Locations / Map */}
                <div className="md:w-1/2 p-8 ">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                        Our Stores
                    </h2>

                    {/* Shop No. 1 - Bhagur */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Shop No. 1 - Bhagur</h3>
                        <p className="text-xs text-gray-600 mb-2">
                            296, Nehru Path, Bhagur, Nashik – 422 502<br />
                            Phone: 844-634-9063
                        </p>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.756781374319!2d73.788093274666!3d20.195039714058995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95fd0458cebd%3A0x5015cc2404991970!2sSai%20Shraddha%20Jewellers%20Private%20Limited!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-48 rounded-lg shadow-sm"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Shop No. 2 - Saraf Bazar */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Shop No. 2 - Saraf Bazar</h3>
                        <p className="text-xs text-gray-600 mb-2">
                            Shop No. 5, Neha Apartment, Near Ashok Bakery,<br />
                            Saraf Bazar, Nashik, Maharashtra – 422 002<br />
                            Phone: 738-761-9984
                        </p>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5440155084627!2d73.78600137466547!3d20.15882981636015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb07b9b1033d%3A0x4ef58142b156d7ed!2sSai%20Shraddha%20Jewellers%20Wholesale!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
                            className="w-full h-48 rounded-lg shadow-sm"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
