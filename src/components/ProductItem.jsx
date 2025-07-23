import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price, section }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/products/${id}`}
      state={{ id, image, name, price, section }}
      className="text-gray-800 cursor-pointer"
    >
      <div className="group cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg max-h-60 sm:max-h-72">
          <img src={image} alt={name} loading='lazy' className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105" />
        </div>
        <p className="pt-3 pb-1 text-sm text-center font-medium">{name}</p>
        <p className="font-medium text-sm text-center"> {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;