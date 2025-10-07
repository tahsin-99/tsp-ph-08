import React from 'react';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'


const Homeapp = ({ app }) => {
    const { image, title,whyUsed,ratingAvg,downloads } = app
    return (
        <div className='w-[348px] h-[435px] border border-gray-300 shadow-md rounded-sm mt-5'>
                <img  src={image} className='h-[316px] rounded-lg mt-2 mx-auto ' alt="" />
                <p className='font-medium text-[20px] ml-2'>{title} :  {whyUsed}</p>
                <div className='flex justify-between mt-5 p-2'>
                    <button className='w-[70px] h-[30px] bg-[#F1F5E8] text-green-500 p-1'>
                       <div className='flex gap-3'>
                         <img width={20} height={20} src={download} alt="" />
                         <p>{downloads}M</p>
                       </div>

                    </button>
                    <button className='w-[70px] h-[30px] bg-[#FFF0E1] text-orange-500 p-1'>
                    <div className='flex gap-3'>
                        <img width={20} height={16} src={ratings} alt="" />
                        <p>{ratingAvg}</p>
                    </div>
                    </button>
                </div>
        </div>
    );
};

export default Homeapp;