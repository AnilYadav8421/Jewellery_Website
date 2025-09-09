import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import CollectionsItems from './CollectionsItems';
import axios from 'axios';
const Collections = () => {
  const { product } = useContext(ShopContext);
  const [collection, setCollection] = React.useState([]);

  async function getCollection() {
    await axios.get("https://ssjapi.pythonanywhere.com/web/collections/")
      .then((response) => {
        setCollection(response.data);
      }
      )
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }

  React.useEffect(() => {
    getCollection();
  }, []);

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
          {
            collection.map((item) => (
              <CollectionsItems
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Collections;
