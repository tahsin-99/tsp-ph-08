import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utility/addToDB';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'

const Installed = () => {
    const [appList, setAppList] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        const storedAppData = getStoredApp()
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const appList = data.filter(app => ConvertedStoredApps.includes(app.id))
        setAppList(appList)
    }, [])
    return (
        <>
            <div className='text-center mt-10 space-y-5'>
                <p className='font-bold text-5xl'>Your Installed Apps</p>
                <p className='font-normal text-[20px] text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between p-5'>
                <p className='font-semibold text-2xl'>{appList.length} Apps Found</p>
                <button className='bg-gray-300 rounded-sm w-[150px]'>Sort by Size</button>
            </div>

            <div className='w-[1440px] mx-auto h-[427px]  mt-10'>
                <div className='space-y-5'>
                    {
                        appList.map(app => (
                            <div key={app.id} className='flex w-[1440px] h-[112px] border-1 border-gray-200 justify-between p-4 items-center'>

                                <div className='flex'>
                                    <div>
                                        <img className='w-[80px] h-[80px] ' src={app.image} alt="" />
                                    </div>
                                    <div>
                                        <div className='flex mt-3'>
                                            <p className='text-[20px] font-medium'>{app.title} : {app.whyUsed}</p>


                                        </div>
                                        <div className='flex items-center gap-10 mt-3'>
                                            <div className='flex items-center gap-2'>
                                                <p><img className='w-[16px] h-[16px]' src={download} alt="" /></p>
                                                <p>{app.downloads}M</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <p><img className='w-[16px] h-[16px]' src={ratings} alt="" /></p>
                                                <p>{app.ratingAvg}</p>
                                            </div>
                                            <p className='text-[16px] font-normal text-[#627382]'>{app.size}MB</p>
                                        </div>

                                    </div>
                                </div>
                                <button className='w-[100px] h-[43px] bg-[#00D390] text-white rounded-sm'>Uninstall</button>
                            </div>

                        ))
                    }
                </div>
            </div>

        </>

    );
};

export default Installed;