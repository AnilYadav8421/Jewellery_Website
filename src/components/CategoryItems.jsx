import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryItems = ({ image, name, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) return onClick();
        if (name !== 'More') {
            const route = `/category/${name.toLowerCase().replace(/\s+/g, '-')}`;
            navigate(route);
        }
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
        >
            {/* Image Section */}
            <div className="w-full h-56 sm:h-60 md:h-80 lg:h-[19rem] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Text */}
            <div className="p-4 text-center bg-white">
                <p className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-rose-600 transition-colors duration-200">
                    {name}
                </p>
            </div>
        </div>
    );
};

export default CategoryItems;
