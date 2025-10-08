import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Homeapps from '../Homeapps/Homeapps';


const Home = () => {
    const data=useLoaderData()
    

    return (
        <div>
          <Banner ></Banner>  
          <Homeapps data={data}></Homeapps>
        </div>
    );
};

export default Home;