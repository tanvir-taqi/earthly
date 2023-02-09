import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiDotsVertical,BiCartAlt } from "react-icons/bi";
import Cart from '../../Cart/Cart';
import Advertisement from '../../Advertisement/Advertisement';

const Header = () => {
    const [display, setDisplay] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showAd, setShowAd] = useState(false)

    return (
        <div className='' >
            
            <div className={`text-white fixed top-0 bg-[#d01043] z-[999] w-full  py-1   flex flex-col md:flex-row justify-between items-center md:rounded-br-full md:rounded-bl-full`}>
                <div className=" flex justify-around items-center w-full md:px-8 md:w-1/3">

                    {/* header logo and name  */}

                    <Link to='/' >
                        <img src='https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_71,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png' alt="" />
                    </Link>

                    <Link to='/' className='hidden md:block text-start' >
                        <h1 className='text-2xl font-extrabold tracking-widest'>earthly</h1>
                        <p className='text-xs font-mono tracking-wider'>Sustainable products at affordable prices</p>
                    </Link>

                    <button className='block md:hidden font-extrabold text-4xl text-white' onClick={() => setDisplay(!display)}><BiDotsVertical></BiDotsVertical></button>
                </div>
                {/* header links  */}
                <div className={`flex  md:items-center md:justify-around  flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'} md:w-2/3`} >
                    <div>
                        <button onClick={()=>setShowAd(true)}>
                            <img className=' hover:animate-spin' src="https://static.wixstatic.com/media/a3c153_313e78e612ad43f993d87370745c5540~mv2.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_313e78e612ad43f993d87370745c5540~mv2.png" alt="" />
                        </button>
                    </div>
                    <div onClick={() => setDisplay(false)} className="  flex flex-col items-start md:items-center md:flex-row py-12 md:py-1 ">
                        <Link className='mr-6 my-2 text-base hover:underline' to='/'>Home</Link>
                        <Link className='mr-6 my-2 text-base hover:underline' to='/shop'>shop</Link>
                        <Link className='mr-6 my-2 text-base border border-white px-3 py-1 rounded-3xl hover:bg-gradient-to-br from-[#000000e7] to-[#0000]'  to='/getintouch'>Get in touch</Link>
                        <button onClick={()=> setShowCart(!showCart)} className='mr-6 my-2 text-3xl ' ><BiCartAlt></BiCartAlt></button>
                    </div>

                </div>
            </div>

            {
                showCart && <Cart setShowCart={setShowCart}></Cart>
            }
            
            {
                showAd && <Advertisement setShowAd={setShowAd}></Advertisement>
            }

        </div>
    );
};

export default Header;