import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const AllJewellary = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  console.log(filterProduct)

  const { products } = useContext(ShopContext);

  return (
    <div className="min-h-screen pt-10">
      {/* Page Heading using Title component */}
      <div className="text-2xl text-center pt-4">
        <Title text="All Jewellery" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        {/* Filter Sidebar */}
        <div className="sm:min-w-[250px]">
          <div
            className="flex items-center justify-between sm:justify-start gap-2 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <p className="text-xl font-medium">Filters</p>
            <ChevronDown
              className={`sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`}
              size={20}
            />
          </div>

          {/* Category Filters */}
          <div
            className={`${showFilter ? 'block' : 'hidden'
              } sm:block border border-gray-300 rounded-lg px-5 py-4 mt-4`}
          >
            <p className="text-sm font-semibold text-gray-700 mb-3">CATEGORIES</p>
            <div className="flex flex-col gap-3 text-sm text-gray-800">
              {['Silver', 'Gold', 'Rings', 'Earrings', 'Collections', 'More'].map((item) => (
                <label key={item} className="inline-flex items-center gap-2">
                  <input type="checkbox" value={item} className="accent-red-500" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid + Sort */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="mb-4 w-full flex justify-end">
            <select
              className="w-36 sm:w-auto text-sm sm:text-base border border-gray-300 rounded px-2 py-2 focus:outline-red-400"
            >
              <option>Sort by</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>



          {/* Product Cards (placeholder) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              products.map((item, index) => {
                return (
                  <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJewellary;
