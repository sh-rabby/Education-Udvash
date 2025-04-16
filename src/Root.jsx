import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/Header/NavBar';
import TopHeader from './Components/Header/TopHeader';

const Root = () => {
    return (
        <div>
            <TopHeader />       {/* TopHeader */}
            <NavBar />          {/* NavBar */}
            <Outlet />          {/* Child components rendered here */}
            <Footer />          {/* Footer */}
        </div>
    );
};

export default Root;
