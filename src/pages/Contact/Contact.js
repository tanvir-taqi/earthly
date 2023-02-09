import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Contact.css'
import 'leaflet/dist/leaflet.css';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet';
import JoinClub from './JoinClub';

const Contact = () => {
    const position = [53.350565904132374, -6.415736339003765]
    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow 
    });
    useEffect(()=>{
        window.scrollTo(0,0)
        window.document.title ='Earthly | Contact'
    })
    return (
        <div className='py-32 bg-[#effddb] '>
            <div >
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center p-3 md:p-12'>
                    <div>
                        <h1 className="text-3xl font-semibold ">CONTACT US</h1>
                        <p>16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50, Ireland</p>
                        <p> hello@earthly.ie</p>
                        <p>+353 1552 4908</p>
                        <div>
                            <h2 className='text-3xl py-6'>Get In Touch</h2>
                            <form className='grid grid-cols-2 gap-3'>
                                <div>
                                    <div className="form-control flex flex-col items-start justify-center w-full">
                                        <label htmlFor="">First Name</label>
                                        <input className='w-full border border-gray-800 focus:shadow-md focus:shadow-[#d01043] outline-none p-1 text-black font-semibold rounded-lg' type="text" />
                                    </div>
                                    <div className="form-control flex flex-col items-start justify-center w-full">
                                        <label htmlFor="">Email</label>
                                        <input className='w-full border border-gray-800 focus:shadow-md focus:shadow-[#d01043] outline-none p-1 text-black font-semibold rounded-lg' type="email" />
                                    </div>
                                    <div className="form-control flex flex-col items-start justify-center w-full">
                                        <label htmlFor="">Phone</label>
                                        <input className='w-full border border-gray-800 focus:shadow-md focus:shadow-[#d01043] outline-none p-1 text-black font-semibold rounded-lg' type="text" />
                                    </div>

                                    <input type="submit" value="Send Message" className='send-btn rounded-lg text-white font-bold  mt-8 py-2 px-5' />

                                </div>
                                <div>
                                    <div className="form-control flex flex-col items-start justify-center w-full">
                                        <label htmlFor="">Last Name</label>
                                        <input className='w-full border border-gray-800 focus:shadow-md focus:shadow-[#d01043] outline-none p-1 text-black font-semibold rounded-lg' type="text" />
                                    </div>
                                    <div className="form-control flex flex-col items-start justify-center w-full">
                                        <label htmlFor="">Message</label>
                                        <textarea className='w-full border border-gray-800 focus:shadow-md focus:shadow-[#d01043] outline-none p-1 text-black font-semibold rounded-lg' name="" id="" cols="30" rows="7"></textarea>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className=' z-[100] p-10'>
                        <MapContainer style={{ height: "400px" }} center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker icon={icon} position={position}>
                                <Popup>
                                
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <div className='pt-20'> 
                   <JoinClub></JoinClub>
                </div>
            </div>
        </div>
    );
};

export default Contact;