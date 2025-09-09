import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import img1 from '../assets/img-1.webp';
import img2 from '../assets/img-2.webp';
import img3 from '../assets/img-3.webp';
import Title from './Title';
import ProductItem from './ProductItem';
import axios from 'axios';

const MostGifted = () => {
    const { product } = useContext(ShopContext);
    const [gifts, setGifts] = React.useState([]);

    async function getGifts() {
        await axios.get("https://ssjapi.pythonanywhere.com/web/most-gifted/")
            .then((response) => {
                setGifts(response.data);
            }
            )
            .catch((error) => {
                console.error("Error fetching banners:", error);
            });
    }

    React.useEffect(() => {
        getGifts();
    }, []);


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
                    {
                        gifts.map((item) => (
                            <ProductItem
                                key={item.id}
                                id={item.id}
                                image={item?.product?.image}
                                name={item?.product?.name}
                                price={item?.product?.size_chart[0]?.total_price}
                                section="Most Gifted"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MostGifted;
