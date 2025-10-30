import { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularCelebrities } from "../Data/slice";

const PopularCelebrities = () => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPopularCelebrities());
    }, []);

    const popData = useSelector((state) => state.popularCelebrities.data);

    return (
        <div className="flex flex-col items-start w-full p-4 mt-2">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-2 cursor-pointer transition-colors duration-200">
                <div className="w-1 h-[26px] bg-[#F5C518] rounded-md"></div>
                <h2 className={`text-2xl font-bold pb-0.5 transition-colors duration-200 text-white`}>
                    Most popular celebrities</h2>
                <MdOutlineArrowForwardIos size={26} className={`pt-1 -mx-2 transition-colors duration-200 ${isHovered ? "text-[#F5C518]" : "text-white"}`}
                />
            </div>
            <div className="w-full overflow-x-auto  scrollbar-none mt-6">
                <div className="flex items-center gap-5 px-2">
                    {
                        popData.slice(0, 12).map((celebrity) => {
                            return <div key={celebrity.id} className="shrink-0 flex flex-col w-52 cursor-pointer hover:brightness-75">
                                <div className="w-52 h-52 rounded-full bg-amber-300 p-0.5">
                                    <img key={celebrity.id} src={celebrity.image.medium} alt={celebrity.name} className="h-full w-full object-cover rounded-full" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-white font-semibold mt-2 text-sm truncate">{celebrity.name}</p>
                                </div>
                            </div> 
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularCelebrities;
