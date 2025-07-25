import { createContext } from "react";
import {products} from '../assets/jewelery_assets/assets.js'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹'
        const value = {
        products, currency
    }
    return (
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;