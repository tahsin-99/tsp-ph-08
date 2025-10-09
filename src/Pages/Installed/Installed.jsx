import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp,removeData } from '../../Utility/addToDB';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'

const Installed = () => {

        const [sort,setSort]=useState('')

        const handleSort=(size)=>{
                setSort(size)
                if(size=='low to high'){
                        const sortedHigh=[...appList].sort((a,b)=>a.size-b.size)
                        setAppList(sortedHigh)
                }
                if(size=='high to low'){
                      const   sortedLow=[...appList].sort((a,b)=>b.size-a.size)
                      setAppList(sortedLow)
                }
        }

    const [appList, setAppList] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        const storedAppData = getStoredApp()
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const appList = data.filter(app => ConvertedStoredApps.includes(app.id))
        setAppList(appList)
    }, [])

    const handleRemove=(id)=>{
          const removeApp=appList.filter(app=>app.id!==id)
          setAppList(removeApp)
          removeData(id)
          
    }
    return (
        <>
            <div className='text-center mt-10 space-y-5'>
                <p className='font-bold text-5xl'>Your Installed Apps</p>
                <p className='font-normal text-[20px] text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between p-5'>
                <p className='font-semibold text-2xl'>{appList.length} Apps Found</p>
               <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">
    {sort?sort:'Sort by size  ⬇️'}
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('low to high')}>Low to High</a></li>
    <li><a onClick={()=>handleSort('high to low')}>High to Low</a></li>
  </ul>
</div>
            </div>

            <div className='w-[1440px] mx-auto   mt-10'>
                <div className='space-y-5'>
                    {
                        appList.map(app => (
                            <div key={app.id} className='flex w-[1440px] h-[112px] border-1 border-gray-200 justify-between p-4 items-center'>

                                <div className='flex'>
                                    <div>
                                        <img className='w-[80px] h-[80px] mr-3 ' src={app.image} alt="" />
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
                                <button onClick={()=>handleRemove(app.id)} className='w-[100px] h-[43px] bg-[#00D390] text-white rounded-sm cursor-pointer transform transition-transform duration-200 active:-translate-y-1 hover:-translate-y-1 '>Uninstall</button>
                            </div>

                        ))
                    }
                </div>
            </div>

        </>

    );
};

export default Installed;