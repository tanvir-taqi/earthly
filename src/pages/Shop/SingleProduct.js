import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleProduct = ({ product }) => {
    const { name, id, imageUrl, prevPrice, currentPrice, available } = product
    return (
        <div className=' m-3'>
            <div className=' bg-gray-200 p-3 flex flex-col items-center justify-center'>
                <PhotoProvider
                 speed={() => 800}
                 easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <PhotoView src={imageUrl}>
                        <img src={imageUrl} className='w-full cursor-pointer' alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className='w-full flex flex-col items-start justify-center'>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p>{prevPrice ? <span className='line-through text-lg mr-4'>&euro;{prevPrice}</span> : ''} <span className=' font-medium text-lg'>&euro;{currentPrice}</span></p>
                </div>
                {
                    available ? 
                    <div className='flex justify-between w-full my-2 '>
                        <button className='rounded-lg p-1 w-full  mr-2 bg-[#004904] text-white hover:bg-gradient-to-br from-[#004203] to-gray-900'>Add To Cart</button>
                        <button className='rounded-lg p-1 w-full  ml-2 bg-black text-white hover:bg-gradient-to-br from-black to-gray-900'>View Details</button>
                    </div>
                    : <button disabled className='rounded-lg p-1 w-full my-2 bg-gray-400 ml-2'>Out of Stock</button>
                    
                }
            </div>

        </div>
    );
};

export default SingleProduct;