import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import {  useLoaderData, useNavigate, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { addToStoreDB } from '../../Utility/addToDB';

import apperror from '../../assets/App-Error.png'
import { toast } from 'react-toastify';


const AppDetails = () => {

  const navigate=useNavigate()

    const [install,setInstall]=useState(false)
   
    
    const {id} =useParams()
    const appId =parseInt(id)
   const data=useLoaderData()

   const singleApp=data.find(app=>app.id===appId)

    if (!singleApp) {
    return (
     <div className='flex flex-col justify-center items-center mt-10 gap-5 p-5'>
      <div><img className=' h-[300px]' src={apperror} alt="" /></div>
      <div className='text-center'>
        <p className='font-semibold text-5xl'>OPPS!! APP NOT FOUND</p>
        <p className='font-normal text-[20px] text-[#627382]'>The App you are requesting is not found on our system.  Please try another apps</p>
        
           <button onClick={()=>navigate(-1)} className='mt-20 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold rounded-sm w-[150px] h-[48px] cursor-pointer'>Go Back!</button>
           
      </div>
     </div>
    );
  }
   const {title,image,whyUsed,companyName,downloads,ratingAvg,reviews,size,description,ratings:ratingData}=singleApp
   
   
   const handleInstallClick = () => {
    
     if(install){
      toast('This app is already installed');
      return;
     }
   
  setInstall(true); 
  toast('App Installing...')
  
  addToStoreDB(id)    
};
    

    return (
       <>
       <div className='sm:flex justify-between items-center p-5 '>
        <div className='sm:w-[25%]'>
            <img className='w-[350px] h-[350px]' src={image} alt="" />
        </div>
        <div className='sm:w-[75%] space-y-10'>
           <div className='border-b-1'>
             <h3 className='text-3xl font-bold'>{title} : {whyUsed} </h3>
            <p className='font-normal text-[20px] text-[#627382]'>Developed by:<span className='text-purple-600'>{companyName}</span></p>
           </div>
           <div className='flex sm:gap-10 gap-8 '>
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
         <button onClick={handleInstallClick} className=' w-[239px] h-[52px] bg-[#00D390] rounded-sm text-white cursor-pointer transition-transform duration-150 active:-translate-y-1 hover:-translate-y-1 active:scale-95'>{!install?`Install Now (${size}MB)`:'Installed'}  </button>
         
      </div>
      
       
       <div className='p-5'>
            <p className='font-semibold text-[24px]'>Ratings</p>

            <ResponsiveContainer width='100%' height={300} >
               <BarChart className='' 
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
              </ResponsiveContainer>
            
       </div>

       <div className='p-5'>
        <p className='font-semibold text-[24px]'>Description:</p>
        <p className='text-[#627382] text-20 font-normal'>{description}</p>
       </div>
       
       </>
    );
};

export default AppDetails;