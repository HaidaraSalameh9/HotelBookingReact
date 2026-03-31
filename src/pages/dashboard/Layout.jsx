import React from 'react';
import Navbar from '../../component/dashboardComponent/Navbar.jsx';
import SideNavbar from '../../component/dashboardComponent/SideNavbar.jsx';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <SideNavbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
