import React from 'react';
import Hero from './Home Componemts/Hero';
import Services from './Home Componemts/Services';
import EqualServices from './Home Componemts/EqualServices';
import Preparation from './Home Componemts/Preparation';
import BuetTop from './Home Componemts/BuetTop';
import Stat from './Home Componemts/Stat';
import Success from './Home Componemts/Success';
import Programs from '../Programs/Programs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Programs></Programs>
            <Stat></Stat>
            <Success></Success>
            <BuetTop></BuetTop>
            <Services></Services>
            <EqualServices></EqualServices>
            <Preparation></Preparation>
            
        </div>
    );
};

export default Home;