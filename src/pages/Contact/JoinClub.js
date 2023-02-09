import React from 'react';

const JoinClub = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-medium">Join the Club</h1>
                    <p className="text-xl text-center font-medium">Join our email list and get access to specials deals exclusive to our subscribers.</p>
                    <div className='flex flex-col items-center justify-center w-full'>

                        <div className='flex flex-col items-start py-6'>
                        <p>Enter your email here</p>
                        <div >
                        <input type="email"  className=' border border-gray-800 focus:shadow-md focus:shadow-[#d01043] outline-none p-1 text-black font-semibold rounded-lg' />
                            <label htmlFor="" className='send-btn rounded-lg text-white font-bold  mt-8 py-2 px-5'>Email</label>
                        </div>
                            
                        </div>
                    </div> 
        </div>
    );
};

export default JoinClub;