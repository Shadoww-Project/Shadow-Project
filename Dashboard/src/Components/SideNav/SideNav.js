import React, { useState } from 'react'
import './SideNav.css'
import Logo from '../../assets/img/Mask Group 1.png'
import { AiOutlineHome } from 'react-icons/ai'
import { PiUsersThreeThin } from 'react-icons/pi'
import { FaUserTie } from 'react-icons/fa'

const SideNav = () => {
    const [isDevMode, setIsDevMode] = useState(false);
    const [isDevMode1, setIsDevMode1] = useState(false);
    const [isDevMode2, setIsDevMode2] = useState(false);

    const toggleDevMode = (type) => {
        if (type === "home") {
            setIsDevMode1(!setIsDevMode1)
            setIsDevMode2(!setIsDevMode2)

            setIsDevMode(prevMode => !prevMode);
        } else if (type === "users") {
            setIsDevMode(!setIsDevMode)
            setIsDevMode2(!setIsDevMode2)
            setIsDevMode1(prevMode => !prevMode);
        } else if (type === "specialists") {
            setIsDevMode(!setIsDevMode)
            setIsDevMode1(!setIsDevMode)
            setIsDevMode2(prevMode => !prevMode);

        }
    };

    return (
        <div className='bg-[#ffffff] min-h-screen sticky top-0'>
            <div className='flex justify-center mt-8'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='flex justify-center mt-16'>
                <ul>
                    <div onClick={() => toggleDevMode("home")} className={` flex flex-row ${isDevMode ? 'text-[#68C6C5]' : ''}`}>
                        <AiOutlineHome className='svg_icon' />
                        <li className='ml-2'>Home</li>
                    </div>

                    <div onClick={() => toggleDevMode("users")} className={`mt-12 flex flex-row ${isDevMode1 ? 'text-[#68C6C5]' : ''}`}>
                        <PiUsersThreeThin className='svg_icon' />
                        <li className='ml-2'>Users</li>
                    </div>

                    <div onClick={() => toggleDevMode("specialists")} className={`mt-12 flex flex-row ${isDevMode2 ? 'text-[#68C6C5]' : ''}`}>
                        <FaUserTie className='svg_icon' />
                        <li className='ml-2'>Specialists</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default SideNav;