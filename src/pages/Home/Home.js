import React, { useContext, useEffect } from 'react';
import { MyProductContext } from '../../ProductContext/ProductContext';
import Contact from '../Contact/Contact';
import Shop from '../Shop/Shop';
import About from './About/About';
import Hero from './Hero/Hero';

const Home = () => {
    const {products} = useContext(MyProductContext)
    useEffect(()=>{
        window.scrollTo(0,0)
        window.document.title ='Earthly | Home'
    })
    return (
        <div className=''>
            <Hero></Hero>
            <Shop limit={3}></Shop>
            <About></About>
            <Contact></Contact>

        </div>
    );
};
export default Home;