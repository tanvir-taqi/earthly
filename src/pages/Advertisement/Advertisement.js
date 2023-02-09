import React from 'react';
import JoinClub from '../Contact/JoinClub';

const Advertisement = ({ setShowAd }) => {
    return (
        <div className='flex w-full justify-end items-start '>
            <div className='h-[100vh] bg-gradient-to-bl from-[#a5e7ff] via-[#cb9effe0] to-[#90ffa4ea] border border-black  w-full  z-[999] fixed'>
                <div className='py-4'>
                    <div className='flex w-full justify-end items-start'>
                        <button onClick={() => setShowAd(false)} className='border text-black hover:text-white hover:bg-gradient-to-br from-[#d01043a6] to-black border-[#d01043] mx-4 my-4 px-3 py-1 rounded-full text-bold text-lg'>X</button>
                    </div>

                </div>
                <div className='py-4 flex flex-col md:flex-row justify-center items-center'>
                    <img className='rounded-3xl ' src="https://static.wixstatic.com/media/a3c153_63715692a2184432bc09917209bf2c8f~mv2.jpg/v1/crop/x_1,y_69,w_2037,h_1345/fill/w_607,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1168002788%20(1)_b.jpg" alt="" />
                    <div>
                        <h1 className='font-mono text-5xl font-extrabold text-center tracking-wider text-[#d01043]'>Hey cutie, here's 10% off.</h1>
                        <p className='font-bold text-2xl text-black text-center'>Enter your email below to receive the coupon code.</p>
                    </div>
                </div>
                <div>
                    <JoinClub></JoinClub>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;