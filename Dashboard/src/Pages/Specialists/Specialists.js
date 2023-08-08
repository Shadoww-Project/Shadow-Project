import React from 'react'
import './Specialists.css'
import SideNav from '../../Components/SideNav/SideNav';
import TopNav from '../../Components/TopNav/TopNav';

const Specialists = () => {
    return (
        <>
            <div className='flex'>
                <div>
                    <SideNav />
                </div>
                <div className='flex-1 h-screen'>
                    <TopNav />
                </div>
            </div>

        </>
    )
}

export default Specialists