import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className='bg-[#1c1c1c] text-[#fff3f3] grid grid-cols-1 md:grid-cols-3 justify-center items-center py-20 md:px-12 px-3'>
                <div className='flex flex-col items-start justify-around my-6'>
                <Link to='/' >
                        <img src='https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_71,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png' alt="" />
                    </Link>

                    <Link to='/' className=' text-start' >
                        <h1 className='text-2xl font-extrabold tracking-widest '>earthly</h1>
                        <p className='text-xs font-mono tracking-wider'>Sustainable products at affordable prices</p>
                    </Link>
                </div>
                <div className='flex  my-6 '>
                    <a className='text-lg border border-white hover:bg-gradient-to-br from-[#d01043a6] to-black px-2 py-2 mx-3 rounded-full' href="/"><FaInstagram></FaInstagram></a>
                    <a className='text-lg border border-white hover:bg-gradient-to-br from-[#d01043a6] to-black px-2 py-2 mx-3 rounded-full' href="https://www.facebook.com/wix"><FaFacebook></FaFacebook></a>
                    <a className='text-lg border border-white hover:bg-gradient-to-br from-[#d01043a6] to-black px-2 py-2 mx-3 rounded-full' href="/"><FaTwitter></FaTwitter></a>
                    <a className='text-lg border border-white hover:bg-gradient-to-br from-[#d01043a6] to-black px-2 py-2 mx-3 rounded-full' href="https://www.linkedin.com/company/wix-com/?trk=public_jobs_topcard_logo&originalSubdomain=il"><FaLinkedin></FaLinkedin></a>
                    <a className='text-lg border border-white hover:bg-gradient-to-br from-[#d01043a6] to-black px-2 py-2 mx-3 rounded-full' href="https://www.youtube.com/user/Wix"><FaYoutube></FaYoutube></a>

                </div>
                <div className=' my-6'>
                    <p>@2022 earthly.ie</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;