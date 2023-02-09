import React from 'react';

const Cart = ({ setShowCart }) => {
    return (
        <div className='flex w-full justify-end items-start '>
            <div className='h-[100vh] bg-[#def3c0] border border-black md:w-1/4 w-full  z-[999] fixed'>
                <div className='bg-black py-4'>
                    <div className='flex w-full justify-end items-start'>
                        <button onClick={() => setShowCart(false)} className='border text-white hover:bg-gradient-to-br from-[#d01043a6] to-black border-[#d01043] mx-4 my-4 px-3 py-1 rounded-full text-bold text-lg'>X</button>
                    </div>
                    <div>
                        <h1 className="text-center text-3xl text-extrabold text-white">Cart</h1>
                    </div>
                </div>
                <div className='py-4'>
                    <h1 className="text-center text-2xl text-bold text-black">Cart is empty</h1>

                </div>
            </div>
        </div>
    );
};

export default Cart;