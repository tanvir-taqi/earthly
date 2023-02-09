import React from 'react';
import VideoLooper from 'react-video-looper'


const About = () => {
    
    return (
        <div>
          
                <div className='bg-[#f9fff1] py-20 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='md:p-12 p-2 text-justify flex flex-col justify-center items-center'>
                        <h1 className='font-extrabold text-3xl tracking-wider'>About earthly</h1>
                        <p className='py-6'>It’s high time for all of us to think about our impression and capacity to lessen the waste and its impacts on the climate. This must be finished by settling on a responsible choice of utilizing eco-friendly products. Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate. These are items produced using sustainable and organic raw materials. Earthly products are of the best quality and in the best designs. What’s more, it’s shockingly easy to roll out sure improvements to your way of life just by sorting out where to begin. Rather than utilizing a plastic cup, trade it for eco-friendly cups and eco-friendly containers. Earthly organic products are the most affordable option in the market. The other alternatives are expensive and lack quality.</p>
                        <p>Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business. Earthly has a fair trade policy for all business deals. You have the right to place orders for sustainable products that go with your budget and business. We’re endeavoring to set new principles, increase present expectations, and review what is useful for your business and our planet. Each move you make as a business is a chance to be better. When you shop at Earthly, you add to a superior future for every one of us. So now you know a superior method to shop sustainable products, and join the development beneath! We offer a variety of biodegradable options like biodegradable cups, biodegradable containers, organic toothbrushes and many more to choose from.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="h-[500px] relative carousel carousel-vertical rounded-box">

                            <div className="carousel-item h-full ">
                                <img src="https://static.wixstatic.com/media/85f2dda759fc4c3ea3d758c583418515.jpg/v1/fill/w_441,h_764,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/85f2dda759fc4c3ea3d758c583418515.jpg" className='w-full img-brightness' alt='' />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://static.wixstatic.com/media/ead566_3bf27d6bd94f4deabeb0feb674b0e28d~mv2.jpg/v1/fill/w_1349,h_657,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_3bf27d6bd94f4deabeb0feb674b0e28d~mv2.jphttps://static.wixstatic.com/media/ead566_3bf27d6bd94f4deabeb0feb674b0e28d~mv2.jpg/v1/fill/w_1349,h_657,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_3bf27d6bd94f4deabeb0feb674b0e28d~mv2.jpg" className='w-full img-brightness' alt="" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://static.wixstatic.com/media/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg/v1/fill/w_1349,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg" className='w-full img-brightness' alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-bl from-[#a5e7ffc4] via-[#cb9eff9c] to-[#90ffa4b4] py-12 '>
                    <h1 className="font-semibold text-center text-3xl py-10">EARTHLY IS PLANT-BASED AND MADE FROM:</h1>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                            <div className='md:px-20 px-2 text-justify '>
                                <h1 className="text-2xl text-center font-bold">BAMBOO AND WHEAT FIBRE</h1>
                                <p className='text-lg font-medium px-12 py-4'>Sourced from local farmers, plant residue from Wheat, Barley, and Bamboo is molded into durable cups using our proprietary technology.</p>
                            </div>
                            <div>
                                <img src="https://static.wixstatic.com/media/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png/v1/fill/w_803,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png" alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                            <div>
                                <img src="https://static.wixstatic.com/media/ead566_715f1190768b47d6b438a68d903211ec~mv2.png/v1/fill/w_803,h_481,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ead566_715f1190768b47d6b438a68d903211ec~mv2.png" alt="" />
                            </div>
                            <div className='md:px-20 px-2 text-justify '>
                                <h1 className="text-2xl text-center font-bold">ORANGE FIBRE</h1>
                                <p className='text-lg font-medium px-12 py-4'>Made from Orange peels and other organic matter left behind after Orange is harvested.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                            <div className='md:px-20 px-2 text-justify '>
                                <h1 className="text-2xl text-center font-bold">Ireland Discards more than 200 Million coffee cups a year</h1>
                                <p className='text-lg font-medium px-12 py-4'>Join us in our mission towards reducing our Carbon Footprint and making Ireland a Zero-waste Circular Economy</p>
                            </div>
                            <div>
                                <div className='w-full'>
                                    <VideoLooper autoplay={true} loopCount={null} width={'100%'} height={'400px'} source={'https://video.wixstatic.com/video/11062b_9c77d10fbe6d4bdfbffe3f7ff1cabd03/1080p/mp4/file.mp4'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default About;