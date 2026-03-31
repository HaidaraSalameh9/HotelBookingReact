import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../public/logo.png';
import { UserButton } from '@clerk/react';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between border-b border-gray-300 px-7 py-3 transition-all'>
            <Link to={"/"}>
                <img src={logo} className={`h-24 w-24 transition-transform duration-300 }`} />

            </Link>

            <UserButton />

        </div>
    );
};

export default Navbar;
