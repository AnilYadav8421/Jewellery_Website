import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import axios from 'axios';

const AllJewellary = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);

  // Sorting
  const [sortOption, setSortOption] = useState("default");
  const [sortedProducts, setSortedProducts] = useState([]);

  // Fetch Products
  const getProducts = async () => {
    try {
      const response = await axios.get("https://ssjapi.pythonanywhere.com/product/");
      setProducts(response.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Apply Sorting
  useEffect(() => {
    let sorted = [...products];

    if (sortOption === "priceLowHigh") {
      sorted.sort((a, b) => {
        const priceA = a?.size_chart?.[0]?.total_price || 0;
        const priceB = b?.size_chart?.[0]?.total_price || 0;
        return priceA - priceB;
      });
    }

    if (sortOption === "priceHighLow") {
      sorted.sort((a, b) => {
        const priceA = a?.size_chart?.[0]?.total_price || 0;
        const priceB = b?.size_chart?.[0]?.total_price || 0;
        return priceB - priceA;
      });
    }

    if (sortOption === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    }

    if (sortOption === "popular") {
      sorted.sort((a, b) => {
        const popA = a?.is_bestseller ? 1 : 0;
        const popB = b?.is_bestseller ? 1 : 0;
        return popB - popA || b.id - a.id;
      });
    }

    setSortedProducts(sorted);
  }, [sortOption, products]);

  return (
    <div className="min-h-screen pt-10">

      {/* Title */}
      <div className="text-2xl text-center pt-4">
        <Title text="All Jewellery" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mt-6">

        {/* Product Section */}
        <div className="flex-1">

          {/* Sort Dropdown */}
          <div className="mb-4 w-full flex justify-end">
            <select
              className="w-40 text-sm border border-gray-300 rounded px-2 py-2 focus:outline-red-400"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {sortedProducts.map((item, index) => {
              const price = item?.size_chart?.[0]?.total_price || 0;

              return (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item.id}
                  price={price}
                  image={item.image}
                />
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AllJewellary;
