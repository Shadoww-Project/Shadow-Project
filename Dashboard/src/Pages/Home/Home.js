import React from 'react';
import './Home.css';
import SideNav from '../../Components/SideNav/SideNav';
import TopNav from '../../Components/TopNav/TopNav';
import SingleCard from '../../Components/SingleCard/SingleCard';
import { AiOutlineEye } from 'react-icons/ai';
import { FaCity, FaUsers } from 'react-icons/fa';
import { TfiBarChart } from 'react-icons/tfi';

const TotalView = {
    title: "TotalView",
    totalNumber: "$3.456K",
    icon: AiOutlineEye,
};

const TotalProfit = {
    title: "TotalProfit",
    totalNumber: '$45.2K',
    icon: TfiBarChart,
};

const TotalCities = {
    title: "TotalCities",
    totalNumber: '$45.2K',
    icon: FaCity,
};

const TotalUsers = {
    title: "TotalUsers",
    totalNumber: '3,456',
    icon: FaUsers,
};

const Home = () => {
    return (
        <div className='flex'>
            <div>
                <SideNav />
            </div>
            <div className='flex-1 h-screen'>
                <TopNav className='relative' />
                <div className='bg-[#FAFAFA] min-h-screen flex justify-center'>
                    <div className='main_container absolute md:bottom-14 md:mt-0 sm:mt-0 mt-2 bg-[#FFFFFF] flex flex-col  flex-wrap p-10'>
                        <h1 className='text-[#193548] mb-4'>General Stats</h1>
                        <div className='dashboard__cards flex flex-wrap justify-center gap-6'>
                            <SingleCard item={TotalView} />
                            <SingleCard item={TotalProfit} />
                            <SingleCard item={TotalCities} />
                            <SingleCard item={TotalUsers} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

