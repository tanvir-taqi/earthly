import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const MyProductContext = createContext()

const ProductContext = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
           setProducts(data)
           setLoading(false)
        })
        .catch(err  => console.error(err))
    },[])
    const valueInfo = {
        products,loading
    }
    return (
        <div>
            <MyProductContext.Provider value={valueInfo}>
                {children}
            </MyProductContext.Provider>
        </div>
    );
};

export default ProductContext;