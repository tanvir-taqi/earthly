import React from 'react';
import './Hero.css'
import { motion } from "framer-motion"


const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
        <div className='relative'>
            <div className='absolute z-50 bottom-12 left-20 text-white text-center'>

                <h1 className='text-4xl tracking-wider font-bold shadow-2xl shadow-black'>Join the Revolution.</h1>
                <p className='text-2xl font-medium shadow-2xl shadow-black'>Make it possible</p>
            </div>

            <div className="h-[500px] relative carousel carousel-vertical rounded-box">

                <div className="carousel-item h-full ">
                    <img src="https://static.wixstatic.com/media/11062b_d709906efd694f14a91f3da1774cdbbaf000.jpg/v1/fill/w_1499,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d709906efd694f14a91f3da1774cdbbaf000.jpg" className='w-full img-brightness ' alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://static.wixstatic.com/media/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg/v1/fill/w_1349,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg" className='w-full img-brightness' alt="" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://static.wixstatic.com/media/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg/v1/fill/w_1349,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg" className='w-full img-brightness' alt="" />
                </div>

            </div>

        </div>
        </motion.div>
    );
};

export default Hero;