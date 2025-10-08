import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'


const AppDetails = () => {
    
    const {id} =useParams()
    const appId =parseInt(id)
   const data=useLoaderData()
//    const ratingData=singleApp.ratings
   const singleApp=data.find(app=>app.id===appId)

    if (!singleApp) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl text-black font-bold">App  not found</h2>

      </div>
    );
  }
   const {title,image,whyUsed,companyName,downloads,ratingAvg,reviews,size,description,ratings:ratingData}=singleApp
   
   

    

    return (
       <>
       <div className='flex justify-between items-center p-5 '>
        <div className='w-[25%]'>
            <img className='w-[350px] h-[350px]' src={image} alt="" />
        </div>
        <div className='w-[75%] space-y-10'>
           <div className='border-b-1'>
             <h3 className='text-3xl font-bold'>{title} : {whyUsed} </h3>
            <p className='font-normal text-[20px] text-[#627382]'>Developed by:<span className='text-purple-600'>{companyName}</span></p>
           </div>
           <div className='flex gap-10 '>
            <div className='space-y-5'>
                <img className='w-[40px] h-[40px]' src={download} alt="" />
            <p className='font-normal text-[16px]'>Downloads</p>
            <p className='font-extrabold text-[40px]' >{downloads}M</p>
            </div>
            <div className='space-y-5'>
                <img className='w-[40px] h-[40px]' src={ratings} alt="" />
            <p className='font-normal text-[16px]'>Average Ratings</p>
            <p className='font-extrabold text-[40px]'>{ratingAvg}</p>
            </div>
            <div className='space-y-5'>
                <img className='w-[40px] h-[40px]' src={review} alt="" />
            <p className='font-normal text-[16px]'>Total Reviews</p>
            <p className='font-extrabold text-[40px]'>{reviews}</p>
            </div>
           </div>
        </div>
        

       </div>
      <div className='mx-auto text-center'>
         <button className=' w-[239px] h-[52px] bg-[#00D390] rounded-sm text-white cursor-pointer'>Install Now ({size}MB) </button>
      </div>
       
       <div className='p-5'>
            <p className='font-semibold text-[24px]'>Ratings</p>

             <BarChart 
            width={1500}
            height={300}
            data={ratingData}
            layout='vertical'
            margin={{top:5,right:30,left:100,bottom:5}}
            
            >
    <CartesianGrid/>
    <XAxis type='number' />
    <YAxis reversed type='category' dataKey='name'/>
    <Tooltip />
    
    <Bar dataKey="count" fill="#632EE3" barSize={30}  />
  </BarChart> 
       </div>

       <div className='p-5'>
        <p className='font-semibold text-[24px]'>Description:</p>
        <p className='text-[#627382] text-20 font-normal'>{description}</p>
       </div>
       
       </>
    );
};

export default AppDetails;