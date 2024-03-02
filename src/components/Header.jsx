import React from 'react';
import logo from '../assets/images/logo.png';

import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus } from 'react-icons/hi2';
import { HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItems';
import { useState } from 'react';


function Header() {

    const [toggle, setToggle] = useState(false);


    const menu = [
        { name: "Home", icon: HiHome },
        { name: "Search", icon: HiMagnifyingGlass },
        { name: "Watch List", icon: HiPlus },
        { name: "Originals", icon: HiStar },
        { name: "Movies", icon: HiPlayCircle },
        { name: "Series", icon: HiTv }
    ];


    return (
        <>

            <div className='flex items-center gap-8 justify-between p-5'>
                <div className='flex items-center gap-8'>
                    <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover' />

                    <div className='hidden md:flex gap-8'>
                        {
                            menu.map((item) => (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))
                        }
                    </div>

                    <div className='flex gap-5 md:hidden'>
                        {
                            menu.map((item, index) => index < 3 && (
                                <HeaderItem name={''} Icon={item.icon} />
                            ))
                        }

                        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                            <HeaderItem name={''} Icon={HiDotsVertical} />


                            {/* Apply Toggle */}
                            {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-3'>
                                {
                                    menu.map((item, index) => index > 2 && (
                                        <HeaderItem name={item.name} Icon={item.icon} />
                                    ))
                                }
                            </div> : null}

                        </div>

                    </div>



                </div>

                <img className='w-[40px] rounded-full' src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fHww" alt="userImage" />

            </div>

        </>
    );

}

export default Header;