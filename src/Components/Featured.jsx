import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchData } from '../Data/slice';

const Featured = () => {
    const dispatch = useDispatch();
    const [showPrev, setShowPrev] = useState(false);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const data = useSelector((state) => state.data.data);

    const groups = [
        [8, 11],
        [11, 14],
        [14, 17],
        [17, 20],
        [20, 23],
    ];

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className={`absolute left-1 top-1/2 transform -translate-y-1/2 z-10 
                    bg-black/10 text-white rounded-sm border border-slate-100 py-8 w-10 h-10
                    lg:flex items-center justify-center transition-all duration-300 cursor-pointer hover:text-[#F5C518]
                    ${showPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden`}
            >
                <IoIosArrowBack size={32} />
            </button>
        );
    };

    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 
                bg-black/10 text-white rounded-sm border border-slate-100 py-8 w-10 h-10
                lg:flex items-center justify-center transition duration-300 cursor-pointer hover:text-[#F5C518] hidden"
            >
                <IoIosArrowForward size={32} />
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 370,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => {
            if (next === 0) {
                setShowPrev(false);
            } else {
                setShowPrev(true);
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="w-full p-4 mt-2">
            <h3 className="text-[#F5C518] text-[30px] font-bold mb-4">
                Featured Today
            </h3>

            <div className="max-w-4xl relative">
                <Slider {...settings}>
                    {groups.map(([start, end], index) => (
                        <div key={index} className="px-2">
                            <div className="bg-black rounded-xl overflow-hidden cursor-pointer hover:brightness-90 transition duration-200">
                                <div className="flex space-x-1 rounded-t-xl overflow-hidden">
                                    {data.slice(start, end).map((item) => (
                                        <div key={item.id} className="flex-1">
                                            <img
                                                className="w-full object-cover"
                                                src={item.image?.medium}
                                                alt={item.name}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-black flex items-center justify-around py-2">
                                    {data.slice(start, end).map((item) => (
                                        <p
                                            key={item.id}
                                            className="text-slate-100 text-center text-sm font-medium truncate w-1/3"
                                        >
                                            {item.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <p className='text-[#5799EF] mt-2 px-2 hover:underline cursor-pointer' href="">See the Picks </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Featured;
