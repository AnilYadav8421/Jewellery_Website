import React from 'react';
import productimg from '../assets/productImg.webp';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLocation, useParams } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const { productId } = useParams();

  const {name, image, price, section} = location.state || {};

  return (
    <div className="pt-16 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto bg-white text-gray-800">
      <Breadcrumbs productName={name} section={section} />

      {/* Product Section */}
      <div className="flex flex-col sm:flex-row gap-12 items-start">

        {/* Product Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={image}
            alt={name}
            className="rounded-2xl shadow-xl w-full max-w-md object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="w-full sm:w-1/2 space-y-2">
          {/* Product Title */}
          <h1 className="text-4xl font-semibold text-gray-900">
            {name}
          </h1>

          {/* Brand + Product Code */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>by <span className="font-medium text-gray-700">Sai Shraddha Jewellery</span></span>
            <span className="border-l border-gray-300 h-4"></span>
            <span>Product Id: {productId}</span>
          </div>

          {/* Pricing */}
          <div>
            <div className="flex items-center gap-4">
              <span className="text-xl text-gray-400 line-through">₹1,05,880</span>
              <span className="text-3xl font-bold text-red-600">₹{price}</span>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md">
                15% OFF
              </span>
            </div>
            <p className="text-xs text-gray-500">(Inclusive of all taxes)</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Crafted with precision and care, this elegant sterling silver necklace adds a touch of timeless beauty to your collection. Whether it’s for a celebration or everyday elegance, it speaks sophistication.
          </p>

          {/* Features */}
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Certified 92.5 Sterling Silver</li>
            <li>Hypoallergenic & Nickel Free</li>
            <li>Elegant velvet box packaging</li>
          </ul>

          {/* Buy Button */}
          <div className="pt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-md text-base font-medium transition-all duration-200">
              Buy Now
            </button>
          </div>
        </div>

      </div>

      {/* Description Section */}
      <div className="mt-20 border-t pt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product Description</h2>
        <div className="text-gray-700 leading-relaxed space-y-4 text-base">
          <p>
            Our Royal Temple Splendour Necklace is inspired by traditional Indian craftsmanship — blending cultural beauty with modern sensibilities. Each piece is crafted to perfection with radiant silver and gemstone detailing.
          </p>
          <p>
            Ideal for weddings, festivities, or timeless gifting, this necklace is more than jewelry — it’s an heirloom in the making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
