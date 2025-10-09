import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import logo from '../../assets/logo.png'
import { ToastContainer } from 'react-toastify';


const Root = () => {
    const navigation =useNavigation()
    const isNavigating=Boolean(navigation.location)

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            {
                isNavigating ?(
                    <div className=' flex flex-1 min-h-screen justify-center items-center'>
                                <p className='text-6xl text-center mt-6 flex font-bold justify-center items-center gap-2'>L
                                   <img className='w-16 h-16 animate-spin inline-block' src={logo}alt="" /> ading.....
                                   </p>
                              </div>
                )  :(
                    <main className='flex-1'>
                <Outlet></Outlet>
            </main>
                )
            }
            
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;