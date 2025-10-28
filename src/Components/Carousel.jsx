import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';

const data = [{
    id: 1,
    title: "Image 1",
    description: "Description for Image 1",
    image: i1
}, {
    id: 2,
    title: "Image 2",
    description: "Description for Image 2",
    image: i2
}, {
    id: 3,
    title: "Image 3",
    description: "Description for Image 3",
    image: i3
}]

const Carousel = () => {
    const SamplePrevArrow = (props) => {
        const {onClick} = props;

        return (
            <button 
                onClick={onClick} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
            >
                <AiOutlineArrowLeft size={20} />
            </button>
        );
    }

    const SampleNextArrow = (props) => {
        const {onClick} = props;
        
        return (
            <button 
                onClick={onClick} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
            >
                <AiOutlineArrowRight size={20} />
            </button>
        );
    }

      var settings = {
        dots: false,
        autoplay:true,
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
                        <div className="w-full h-[480px] rounded-2xl overflow-hidden">
                            <img 
                                src={item.image} 
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