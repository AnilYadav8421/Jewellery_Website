import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import col1 from '../assets/coll1.webp';
import col2 from '../assets/coll2.webp';
import col3 from '../assets/coll3.jpg';
import col4 from '../assets/coll4.jpg';
import Title from './Title';
import CollectionsItems from './CollectionsItems';

const Collections = () => {
  const { product } = useContext(ShopContext);

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <Title text="Top Collections" />
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Whatever the occasion, we've got a beautiful piece of jewellery for you.
          </p>
        </div>

        {/* Grid of Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          <CollectionsItems id="1" image={col1} name="PEACE EARRING" />
          <CollectionsItems id="2" image={col2} name="SILVER RING" />
          <CollectionsItems id="3" image={col3} name="SILVER RING" />
          <CollectionsItems id="3" image={col4} name="Bangles" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
