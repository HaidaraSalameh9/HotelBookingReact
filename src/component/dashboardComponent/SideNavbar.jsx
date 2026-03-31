import { useUser } from '@clerk/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {

    const links = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Add Hotel", path: "/dashboard/add-hotel" },
        { name: "Hotel List", path: "/dashboard/hotel-list" },
    ];

    const { user } = useUser();

    return (
        <div className='w-64 h-screen bg-white border-r flex flex-col'>

            {/* 🔥 USER INFO */}
            <div className='px-6 py-5 border-b'>
                <h2 className='font-semibold text-lg'>
                    {user?.firstName} {user?.lastName}
                </h2>
            </div>

            {/* 🔗 LINKS */}
            <div className='flex flex-col gap-2 mt-4 px-3'>

                {links.map((item, index) => (
                    <NavLink
                        key={index}
                        end={item.path === "/dashboard"} to={item.path}
                        className={({ isActive }) => `px-4 py-3 rounded-lg transition-all duration-200 flex items-center
                            ${isActive
                                ? "bg-orange-500 text-white shadow"
                                : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}

            </div>
        </div>
    );
};

export default SideNavbar;