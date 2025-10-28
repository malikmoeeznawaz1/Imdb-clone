import Carousel from "../Components/Carousel";

const Home = () => {
    return (
        <div className="w-full min-h-screen text-white overflow-hidden bg-black pt-4">
            <div className="flex max-w-7xl mx-auto p-2 gap-2">
                {/* Left side - main trailer area */}
                <div className="flex flex-1 h-[500px] w-2/3 p-2  bg-amber-200">
                    <Carousel />
                </div>

                {/* Right side - up next list */}
                <div className="w-1/3 h-[500px] bg-cyan-400">
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
