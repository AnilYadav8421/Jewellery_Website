import React from 'react';

const CollectionsItems = ({ id, image, name }) => {
    return (
        <div className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lg min-h-[220px] sm:min-h-[280px]">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
                />
            </div>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center text-gray-800 group-hover:text-rose-600 transition">
                {name}
            </h3>
        </div>
    );
};

export default CollectionsItems;
