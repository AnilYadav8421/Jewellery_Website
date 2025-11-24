import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    fetch(`https://ssjapi.pythonanywhere.com/product/${productId}/`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId]);

  if (!product)
    return (
      <div className="p-10 text-center text-gray-500 text-lg">Loading product...</div>
    );

  return (
    <div className="pt-20 px-6 md:px-20 max-w-6xl mx-auto">

      {/* PRODUCT TITLE */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
        {product.name}
      </h1>

      {/* TAGS */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {product.tags?.map((tag) => (
          <span
            key={tag.id}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* MAIN PRODUCT AREA */}
      <div className="mt-10 flex flex-col md:flex-row gap-10">

        {/* LEFT IMAGES SECTION */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">

          {/* Other Images */}
          <div className="flex md:flex-col gap-3">
            {product.other_images?.map((img) => (
              <img
                key={img.id}
                src={img.images}
                className="w-20 h-20 md:w-24 md:h-24 border rounded-lg object-cover hover:scale-105 transition"
                alt="sub"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex justify-center w-full">
            <img
              src={product.image}
              alt="Main"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* RIGHT PRODUCT DETAILS */}
        <div className="w-full md:w-1/2 space-y-5">

          {/* PRICE BOX */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">Price Details</h2>

            {product.size_chart?.map((chart, index) => (
              <div key={index} className="mt-4">
                <p className="font-semibold text-gray-700">
                  Purity: <span className="text-gray-900">{chart.name}</span>
                </p>

                <p className="mt-1 text-lg font-bold text-green-700">
                  ₹{chart.total_price}
                </p>

                <p className="text-sm text-gray-500">GST: ₹{chart.gst}</p>
              </div>
            ))}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed text-base">
            {product.description}
          </p>

          {/* BUY + WISHLIST BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a
              href={`https://wa.me/918446349063?text=${encodeURIComponent(
                `Hello, I am interested in buying this product:\n\n` +
                `Product: ${product.name}\n` +
                `Price: ₹${product.size_chart?.[0]?.total_price}\n\n` +
                `Product Link: ${window.location.href}\n\n` +
                `Please share more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow inline-block"
            >
              Buy on WhatsApp
            </a>
          </div>
          {/* OUT OF STOCK */}
          {product.is_out_of_stock && (
            <p className="text-red-600 text-lg font-bold">Out of Stock</p>
          )}
        </div>
      </div>

      {/* SIZE CHART DETAILS */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">
          Price Breakdown
        </h2>

        {product.size_chart?.map((chart, index) => (
          <div
            key={index}
            className="mt-6 p-6 bg-white border rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">{chart.name}</h3>

            {/* SIZE DETAILS */}
            {chart.size?.map((s) => (
              <div key={s.id} className="mb-4 border-b pb-3">
                <p><b>Material:</b> {s.material.name} ({s.material.purity}k)</p>
                <p><b>Weight:</b> {s.weight} g</p>
                <p><b>Making Charges:</b> ₹{s.making_charges}</p>
              </div>
            ))}

            {/* PRICE BREAKDOWN */}
            <h4 className="text-lg font-semibold mt-4">Breakdown</h4>
            {chart.price_breakdown?.map((pb, i) => (
              <p key={i} className="text-gray-700 mt-1">
                {pb.material}: ₹{pb.material_price} × {pb.weight}g ={" "}
                <b>₹{pb.price}</b>
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Reviews</h2>

        {product.reviews?.length === 0 ? (
          <p className="text-gray-600 mt-2">No reviews yet.</p>
        ) : (
          product.reviews.map((r) => (
            <div key={r.id} className="mt-4 p-4 border rounded-xl shadow-sm">
              {r.comment}
            </div>
          ))
        )}
      </div>

    </div>
  );
}
