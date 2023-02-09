import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { MyProductContext } from '../../ProductContext/ProductContext';
import SingleProduct from './SingleProduct';
import { motion } from "framer-motion"

const Shop = ({ limit }) => {
    const { products ,loading } = useContext(MyProductContext)
    let limitedProducts
    if (limit) {
        limitedProducts = products.slice(0, 3)
    }

    useEffect(()=>{
        window.scrollTo(0,0)
        window.document.title ='Earthly | Shop'
    })

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
        <div className={`${limit ? 'py-12' : 'py-32'}`}>
            <div className={` grid grid-cols-1 md:grid-cols-3 gap-12 `}>
                {
                    limit ? limitedProducts?.map(product => <SingleProduct product={product} key={product.id}></SingleProduct>)
                        : products?.map(product => <SingleProduct product={product} key={product.id}></SingleProduct>)
                }
            </div>
            <div>
                {
                    limit && <Link to='/shop' className='my-12 text-lg text-black font-bold hover:underline'>See All</Link>
                }
            </div>
        </div>
        </motion.div>
    );
};

export default Shop;