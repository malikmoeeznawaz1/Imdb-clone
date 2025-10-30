import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Data/slice';

const Carousel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const data = useSelector((state) => state.data.data);
    console.log(data);
    

    const SamplePrevArrow = (props) => {
        const {onClick} = props;

        return (
            <button 
                onClick={onClick} 
                className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-[black/10] text-white rounded-sm border border-slate-100 py-8 w-12 h-12 lg:flex items-center justify-center transition-all duration-300 cursor-pointer hover:text-[#F5C518] hidden"
            >
                <IoIosArrowBack size={36}  />
            </button>
        );
    }

    const SampleNextArrow = (props) => {
        const {onClick} = props;
        
        return (
            <button 
                onClick={onClick} 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-black/10 text-white rounded-sm border border-slate-100 py-8 w-12 h-12 lg:flex items-center justify-center transition-all duration-300 cursor-pointer hover:text-[#F5C518] hidden"
            >
                <IoIosArrowForward  size={36}  />
            </button>
        );
    }

      var settings = {
        dots: false,
        autoplay:false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


  return (
    <div className="w-full h-full flex items-center justify-center relative hover:cursor-pointer transition ease-in-out hover:brightness-90">
        <div className="w-full h-full max-w-4xl relative">
            <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="w-full h-full relative">
                        <div className="w-full md:h-[480px] h-[280px] rounded-2xl overflow-hidden">
                            <img 
                                src={item.image.original} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-200">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Carousel