import { GoPlay } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Data/slice';
import { useEffect } from "react";


const ComingNext = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const data = useSelector((state) => state.data.data);

    return (
        <div className='w-full h-full md:flex flex-col py-2 justify-start hidden '>
            <span className='text-xl font-bold text-[#F5C518] mb-4'>Up Next</span>
            {
                data.slice(100,103).map((item) => {
                    return <div key={item.id} className='px-2 lg:px-4 py-2'>
                        <div className='flex gap-3'>
                            <div className="shrink-0">
                                <img src={item.image.medium} alt="Upcoming Movie" className='w-20 md:w-28 h-28 md:h-36 object-cover rounded-2xl' />
                            </div>
                            <div className='flex-1 min-w-0 flex flex-col cursor-pointer'>
                                <div className="flex gap-2 items-center hover:text-[#F5C518]">
                                    <GoPlay size={32} className='font-light shrink-0' />
                                    <span className='flex items-end pb-1 font-sm text-[#9DA6AE] text-sm'>{`${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m`}</span>
                                </div>
                                <div className='mt-2 flex-1'>
                                    <p className='text-sm lg:text-md font-sm truncate'>'{item.name}'</p>
                                    <p className='text-sm lg:text-md font-sm text-[#B7B7B7] truncate'>{item.genres[0]}, {item.genres[1]}, {item.genres[2]}</p>
                                </div>
                                <div className='flex items-center gap-2 py-3 lg:py-6'>
                                    <IoIosStarOutline className='text-[#F5C518] text-lg shrink-0' />
                                    <span className='text-sm'>{item.rating.average}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default ComingNext