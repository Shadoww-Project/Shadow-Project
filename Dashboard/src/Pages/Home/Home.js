import React from 'react'
import './Home.css'
import SideNav from '../../Components/SideNav/SideNav'
import TopNav from '../../Components/TopNav/TopNav'

const Home = () => {
    return (
        <div className=' grid grid-cols-5'>
            <div className=' col-span-1'>
                <SideNav />
            </div>
            <div className=' col-span-4'>
                <TopNav className=' relative' />
                <div className='bg-[#FAFAFA] min-h-screen'>
                    <div className='main_container absolute'>
                        <h1 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home