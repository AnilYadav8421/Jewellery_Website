import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import CategoryItems from './CategoryItems';
import c1 from '../assets/c-1.jpeg';
import c2 from '../assets/c-2.webp';
import c3 from '../assets/c-3.webp';
import c4 from '../assets/c-4.webp';
import c5 from '../assets/c-5.webp';
import c6 from '../assets/c-6.webp';
import c7 from '../assets/c-7.webp';
import c8 from '../assets/c-8.webp';
import c9 from '../assets/c-9.webp';
import moreImg from '../assets/moreCategory.jpg';

const ShopByCategory = () => {
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();

    const categories = [
        { id: '1', image: c1, name: 'Silver Jodve' },
        { id: '2', image: c2, name: 'Silver Collection' },
        { id: '3', image: c3, name: 'Elegant Jodve' },
        { id: '4', image: c4, name: 'Designer Jodve' },
        { id: '5', image: c5, name: 'Antique Jodve' },
        { id: '6', image: c6, name: 'Minimalist Jodve' },
        { id: '7', image: c7, name: 'Premium Jodve' },
        { id: '8', image: c8, name: 'Occasion Wear' },
        { id: '9', image: c9, name: 'Traditional' },
        { id: '10', image: moreImg, name: 'More' },
        { id: '11', image: c5, name: 'Bridal Sets' },
        { id: '12', image: c6, name: 'Modern Wear' },
    ];

    const displayList = showAll
        ? categories.filter(cat => cat.name !== 'More') 
        : [...categories.slice(0, 8), categories.find(cat => cat.name === 'More')];

    const handleClick = (name) => {
        if (name === 'More') {
            setShowAll(true);
        } else {
            const slug = name.toLowerCase().replace(/\s+/g, '-');
            navigate(`/category/${slug}`);
        }
    };

    return (
        <section className="my-16 px-4 max-w-screen-xl mx-auto">
            <div className="text-center mb-10">
                <Title text="Shop by Category" />
                <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                    Browse through your favorite categories. We've got them all!
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {displayList.map((cat) => (
                    <div key={cat.id} onClick={() => handleClick(cat.name)} className="cursor-pointer">
                        <CategoryItems id={cat.id} image={cat.image} name={cat.name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategory;
