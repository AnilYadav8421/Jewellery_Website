import React, { useState } from 'react';
import { Menu, X, Search, Home, Gem, Info, IndianRupee, Phone } from 'lucide-react';
import { assets } from '../assets/jewelery_assets/assets.js'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', to: '/', icon: <Home size={18} /> },
        { name: 'All Jewellery', to: '/alljewellary', icon: <Gem size={18} /> },
        { name: 'About Us', to: '/aboutus', icon: <Info size={18} /> },
        { name: 'Current-Rate', to: '/currentrate', icon: <IndianRupee size={18} /> },
        { name: 'Contact', to: '/contact', icon: <Phone size={18} /> },
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query.trim())}`);
            setShowSearch(false);
            setQuery('');
        }
    };

    return (
        <header className="sticky top-0 bg-white z-50 shadow-sm">
            <nav className="mx-auto flex items-center justify-between px-4 sm:px-10 py-4 relative">
                {/* Logo */}
                <Link to="/">
                    <img src={assets.logo} alt="Logo" className="w-24" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex gap-8 text-sm text-gray-700 font-medium tracking-wide">
                    {navItems.map(({ name, to }) => (
                        <li key={name}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `transition-colors duration-200 hover:text-rose-500 ${isActive ? 'text-rose-500' : ''
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Search & Menu */}
                <div className="flex items-center gap-4">
                    <Search
                        onClick={() => setShowSearch(prev => !prev)}
                        className="w-5 h-5 cursor-pointer text-gray-700 hover:text-rose-500 transition-colors"
                    />
                    <Menu
                        onClick={() => setVisible(true)}
                        className="w-6 h-6 cursor-pointer sm:hidden text-gray-700 hover:text-rose-500 transition-colors"
                    />
                </div>

                {/* Search Input */}
                {showSearch && (
                    <form
                        onSubmit={handleSearchSubmit}
                        className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-2 flex items-center gap-2 sm:top-auto sm:right-0 sm:left-auto sm:w-64 sm:absolute sm:mt-2 sm:shadow-md sm:rounded-md"
                    >
                        <input
                            type="text"
                            placeholder="Search jewellery..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-grow outline-none border border-gray-300 px-3 py-1 rounded-md text-sm"
                        />
                        <button
                            type="submit"
                            className="text-sm bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded-md"
                        >
                            Go
                        </button>
                    </form>
                )}

                {/* Mobile Menu Overlay */}
                {visible && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[99]"
                        onClick={() => setVisible(false)}
                    ></div>
                )}

                {/* Mobile Slide Panel */}
                <div
                    className={`fixed top-0 right-0 h-full bg-white z-[100] shadow-lg transition-transform duration-300 ease-in-out 
                    ${visible ? 'translate-x-0' : 'translate-x-full'} w-64 sm:w-72`}
                >
                    <div className="flex flex-col h-full">
                        {/* Panel Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-lg font-semibold text-gray-700">Menu</span>
                            <X
                                onClick={() => setVisible(false)}
                                className="w-6 h-6 cursor-pointer text-gray-600 hover:text-rose-500"
                            />
                        </div>

                        {/* Nav Links with Icons */}
                        <div className="flex flex-col text-gray-700 font-medium tracking-wide">
                            {navItems.map(({ name, to, icon }) => (
                                <NavLink
                                    key={name}
                                    to={to}
                                    onClick={() => setVisible(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 py-3 px-6 hover:bg-gray-100 transition-all ${isActive ? 'text-rose-600' : ''
                                        }`
                                    }
                                >
                                    {icon}
                                    {name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
