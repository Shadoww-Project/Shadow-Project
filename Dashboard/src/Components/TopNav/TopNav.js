import React from 'react'
import './TopNav.css'
import { BiSolidUser, BiBell } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

const TopNav = () => {
    return (
        <div className='main__top bg-[#174047] sm:flex sm:justify-between flex sm:flex-row flex-col sm:items-start items-center '>
            <div>
                <h1 className='h_name'>Welcome back,<span className='span_name'> Mohammad Saad.</span></h1>
                <p className='top_p'>Keep track of all your lorem ipsum and more...</p>
            </div>
            <div className='flex flex-row top__icon'>
                <BiBell className='icon_user mr-8' />
                <div className='line'></div>
                <BiSolidUser className='icon_user ml-8' />
                <IoMdArrowDropdown className='icon_user1' />
            </div>
        </div>
    )
}

export default TopNav