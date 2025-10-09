import React from 'react';
import play from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <>
            <div className='sm:w-[1440px]  h-[full]  mx-auto mt-10'>
                <div className='text-center space-y-4 mt-3'>
                    <h1 className='text-5xl font-bold'>We Build</h1>
                    <h1 className='text-5xl font-bold'><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text'>Productive</span> Apps</h1>
                    <p className='text-[#627382]'>At Appify.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                    <div className='mt-20'>
                        <button className='bg-green-300 border-1 border-gray-100 w-[200px]
                        h-[56px] rounded-sm mr-10 font-semibold p-3 transform transition-transform duration-150 active:-translate-y-1 hover:-translate-y-1 active:scale-95'>
                            <a href="https://play.google.com/store/games?hl=en" target='_blank'>
                                <div className='flex gap-4 items-center'>

                                    <img src={play}  className='' alt="" />
                                    <p> Google Play</p>
                                </div></a>


                        </button>
                        <button className='bg-blue-300 border-1 border-gray-100 w-[200px]
                        h-[56px] rounded-sm mr-10 font-semibold p-3 transform transition-transform duration-150  hover:-translate-y-1 active:scale-95 mt-5 sm:mt-0'>
                            <a href="https://www.apple.com/app-store/" target='_blank'>
                                <div className='flex gap-4 items-center'>
                                    <img src={appstore} alt="" />
                                    <p>App Store</p>
                                </div></a>

                        </button>
                    </div>

                </div>
                <div className='mt-10 p-4'>
                    <img src={hero} className='mx-auto ' alt="" />
                </div>

            </div>
            <div className='bg-linear-to-r  from-[#632EE3] to-[#9F62F2] p-4'>

                <div className='text-white text-center mt-15'>
                    <h1 className='text-4xl font-bold'>Trusted by Millions, Built for You</h1>
                    <div className='sm:flex  justify-around mt-20 '>
                        <div className='flex flex-col gap-6'>
                            <p className='font-normal text-[16px]'>Total Downloads</p>
                            <p className='font-extrabold text-6xl'>155.3M+</p>
                            <p>21% more than last month</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-normal text-[16px]'>Total Reviews</p>
                            <p className='font-extrabold text-6xl'>197K+</p>
                            <p>46% more than last month</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-normal text-[16px]'>Active Apps</p>
                            <p className='font-extrabold text-6xl'>19+</p>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

export default Banner;