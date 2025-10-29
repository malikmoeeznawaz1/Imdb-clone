import React, { useContext, useEffect } from 'react'
import uimg from '../assets/uimg.jpg';
import { GoPlay } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { DataContext } from '../Context/DataContext';

const ComingNext = () => {
    const {fetchData, data} = useContext(DataContext);

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='w-full h-full md:flex flex-col py-2 justify-start hidden'>
            <span className='text-xl font-bold text-[#F5C518] mb-4'>Up Next</span>
            <div className='px-2 lg:px-4 py-2'>
                <div className='flex gap-3'>
                    <div className="shrink-0">
                        <img src={uimg} alt="Upcoming Movie" className='w-20 md:w-28 h-28 md:h-36 object-cover rounded-2xl' />
                    </div>
                    <div className='flex-1 min-w-0 flex flex-col cursor-pointer'>
                        <div className="flex gap-2 items-center hover:text-[#F5C518]">
                            <GoPlay size={32} className='font-light shrink-0' />
                            <span className='flex items-end pb-1 font-sm text-[#9DA6AE] text-sm'>2:23</span>
                        </div>
                        <div className='mt-2 flex-1'>
                            <p className='text-sm lg:text-md font-sm truncate'>'Movie Title Here'</p>
                            <p className='text-sm lg:text-md font-sm text-[#B7B7B7] truncate'>Watch the trailer</p>
                        </div>
                        <div className='flex items-center gap-2 py-3 lg:py-6'>
                            <IoIosStarOutline className='text-[#F5C518] text-lg shrink-0' />
                            <span className='text-sm'>6.5</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-2 lg:px-4 py-2'>
                <div className='flex gap-3'>
                    <div className="shrink-0">
                        <img src={uimg} alt="Upcoming Movie" className='w-20 md:w-28 h-28 md:h-36 object-cover rounded-2xl' />
                    </div>
                    <div className='flex-1 min-w-0 flex flex-col cursor-pointer'>
                        <div className="flex gap-2 items-center">
                            <GoPlay size={32} className='font-light shrink-0' />
                            <span className='flex items-end pb-1 font-sm text-[#9DA6AE] text-sm'>2:23</span>
                        </div>
                        <div className='mt-2 flex-1'>
                            <p className='text-sm lg:text-md font-sm truncate'>'Movie Title Here'</p>
                            <p className='text-sm lg:text-md font-sm text-[#B7B7B7] truncate'>Watch the trailer</p>
                        </div>
                        <div className='flex items-center gap-2 py-3 lg:py-6'>
                            <IoIosStarOutline className='text-[#F5C518] text-lg shrink-0' />
                            <span className='text-sm'>6.5</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-2 lg:px-4 py-2'>
                <div className='flex gap-3'>
                    <div className="shrink-0">
                        <img src={uimg} alt="Upcoming Movie" className='w-20 md:w-28 h-28 md:h-36 object-cover rounded-2xl' />
                    </div>
                    <div className='flex-1 min-w-0 flex flex-col cursor-pointer'>
                        <div className="flex gap-2 items-center">
                            <GoPlay size={32} className='font-light shrink-0' />
                            <span className='flex items-end pb-1 font-sm text-[#9DA6AE] text-sm'>2:23</span>
                        </div>
                        <div className='mt-2 flex-1'>
                            <p className='text-sm lg:text-md font-sm truncate'>'Movie Title Here'</p>
                            <p className='text-sm lg:text-md font-sm text-[#B7B7B7] truncate'>Watch the trailer</p>
                        </div>
                        <div className='flex items-center gap-2 py-3 lg:py-6'>
                            <IoIosStarOutline className='text-[#F5C518] text-lg shrink-0' />
                            <span className='text-sm'>6.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingNext