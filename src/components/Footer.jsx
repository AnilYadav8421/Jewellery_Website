import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/jewelery_assets/assets'

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-3">
            <div className="max-w-screen-xl mx-auto px-4 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4 text-sm text-gray-700">

                <div>
                    <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
                    <p className="text-xs text-gray-500">
                        Crafted with elegance. Trusted by thousands.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
                        <li><Link to="/all" className="hover:text-red-500 transition">All Jewellery</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500 transition">Find a Store</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Information</h4>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/contact" className="hover:text-red-500 transition">Help & FAQs</Link></li>
                        <li><Link to="/aboutus" className="hover:text-red-500 transition">About Us</Link></li>
                        <li><Link to="/blogs" className="hover:text-red-500 transition">Blogs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+91 84463 49063</li>
                        <li>contact@saijewellers.com</li>
                        <li>Chat with Us</li>
                    </ul>

                    <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                        <div className="flex gap-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/918446349063" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 border-t py-4">
                <p>&copy; {new Date().getFullYear()} SSJ Company Limited. All rights reserved.</p>
                <p className="mt-1">
                    <Link to="/terms" className="hover:underline">Terms & Conditions</Link> |
                    <Link to="/privacy" className="hover:underline px-2">Privacy Policy</Link> |
                    <Link to="/refund" className="hover:underline">Refund & Cancellation Policy</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer
