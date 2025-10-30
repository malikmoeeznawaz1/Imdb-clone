import Carousel from "../Components/Carousel";
import ComingNext from "../Components/ComingNext";
import Featured from "../Components/Featured";

const Home = () => {
    return (
        <>
            <div className="w-full text-white overflow-hidden bg-black pt-4">
                <div className="flex max-w-7xl mx-auto pt-2 gap-2">
                    {/* Left side - main trailer area */}
                    <div className="flex flex-1 md:h-[550px] h-[300px] w-2/3 p-2">
                        <Carousel />
                    </div>

                    {/* Right side - up next list */}
                    <div className="lg:w-1/3 h-[500px] hidden lg:block">
                        <ComingNext />
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className="flex w-full max-w-7xl mx-auto pt-2 gap-2">
                <Featured />
            </div>
        </>
    );
};

export default Home;
