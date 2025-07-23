import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import img1 from '../assets/img-1.webp';
import img2 from '../assets/img-2.webp';
import img3 from '../assets/img-3.webp';
import Title from './Title';
import ProductItem from './ProductItem';

const MostGifted = () => {
    const { product } = useContext(ShopContext);

    return (
        <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-10">
                    <Title text="Most Gifted" />
                    <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
                        Discover our most cherished pieces, loved and gifted by our valued customers.
                    </p>
                </div>

                {/* Grid of Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                    <ProductItem
                        id="1"
                        image={img1}
                        name="PEACE EARRING"
                        price="9726.80"
                        section="Most Gifted"
                    />
                    <ProductItem id="2" image={img2} name="SILVER RING" price="8420.50" />
                    <ProductItem id="3" image={img3} name="SILVER RING" price="11200.00" />
                    <ProductItem id="4" image={img1} name="SILVER RING" price="11200.00" />
                </div>
            </div>
        </section>
    );
};

export default MostGifted;
