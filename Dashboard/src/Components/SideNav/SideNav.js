import React, { useState } from 'react'
import './SideNav.css'
import Logo from '../../assets/img/Mask Group 1.png'
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { PiUsersThreeThin } from 'react-icons/pi'
import { FaUserTie } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideNav = () => {
    const [isDevMode, setIsDevMode] = useState(false);
    const [isDevMode1, setIsDevMode1] = useState(false);
    const [isDevMode2, setIsDevMode2] = useState(false);

    const [open, setOpen] = useState(true);



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
        <div className={`${open ? "w-72" : "md:w-24 w-14"}  md:p-8 p-4 duration-300 h-screen bg-white relative`}>
            <AiOutlineArrowLeft onClick={() => setOpen(!open)} className={` absolute cursor-pointer -right-3 top-3 w-7 border-2 border-black rounded-full bg-white ${!open && "rotate-180"}`} />

            <div className={`cursor-pointer duration-500 flex justify-center`}>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='flex justify-center mt-16'>
                <ul>
                    <Link to={"/home"}>
                        <div onClick={() => toggleDevMode("home")} className={` flex flex-row ${isDevMode ? 'text-[#68C6C5]' : ''}`}>
                            <AiOutlineHome className='svg_icon' />
                            <li className={`ml-2 ${!open && 'hidden'}`}>Home</li>
                        </div>
                    </Link>

                    <Link to={"/users"}>
                        <div onClick={() => toggleDevMode("users")} className={`mt-12 flex flex-row ${isDevMode1 ? 'text-[#68C6C5]' : ''}`}>
                            <PiUsersThreeThin className='svg_icon' />
                            <li className={`ml-2 ${!open && 'hidden'}`}>Users</li>
                        </div>
                    </Link>

                    <Link to={"/specialists"}>
                        <div onClick={() => toggleDevMode("specialists")} className={`mt-12 flex flex-row ${isDevMode2 ? 'text-[#68C6C5]' : ''}`}>
                            <FaUserTie className='svg_icon' />
                            <li className={`ml-2 ${!open && 'hidden'}`}>Specialists</li>
                        </div>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default SideNav;