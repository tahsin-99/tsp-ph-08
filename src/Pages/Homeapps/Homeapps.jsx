import React, { Suspense, use } from 'react';
import Homeapp from '../Homeapp/Homeapp';

const Homeapps = ({data}) => {
    
    
    return (
        <div className='w-[1440px] h-full  mx-auto mt-3'>
            <div className='text-center space-y-5 mt-5'>
                <h1 className='font-bold text-5xl'>Trending Apps</h1>
                <p className='text-[#627382] text-[20px] font-normal'>Explore All Trending Apps on the Market developed by us</p>

            </div>

           <Suspense fallback={<span>Loading....</span>}>
            <div className='grid grid-cols-4 gap-4'>
                {
                  data.map((app)=><Homeapp key={app.id} app={app}></Homeapp>)
                }
            </div>
           </Suspense>
        </div>
    );
};

export default Homeapps;