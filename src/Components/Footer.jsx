import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qr from '../Assets/qr.png';
import { Link } from "react-router-dom";

const socialIcons = [
    { icon: <FaTiktok size={25} />, link: "#" },
    { icon: <FaInstagram size={25} />, link: "#" },
    { icon: <FaXTwitter size={25} />, link: "#" },
    { icon: <FaYoutube size={25} />, link: "#" },
    { icon: <FaFacebook size={25} />, link: "#" },
];

const footerLinks = [
    {name: "Help"},
    {name: "Site Index"},
    {name: "IMDbPro"},
    {name: "Box Office Mojo"},
    {name: "License IMDb Data"},
];

const footerLinks2 = [
    {name: "Press Room"},
    {name: "Advertising"},
    {name: "Jobs"},
    {name: "Conditions of Use"},
    {name: "Privacy Policy"},
    {name: "Your Ads Privacy Choices"},
];

const Footer = () => {
    return (
        <div className='w-full text-white mt-6'>
            <div className='max-w-7xl px-4 mx-auto'>
                <p className='text-2xl font-bold'>Recently viewed</p>
                <p className='text-md mt-6 sm:text-start text-center'>You have no recently viewed pages</p>
            </div>
            <div className="flex flex-col sm:mt-16 mt-4">
                <div className='flex items-center justify-center'>
                    <button className='bg-[#F5C518] text-black py-2 px-8 font-bold text-sm rounded-full cursor-pointer hover:bg-[#E2B616]'>Sign in for more access</button>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center gap-2">
                    <div className='flex flex-col border-2 border-[#1F1F1F] sm:mt-6 rounded-md px-8 py-3'>
                        <p className='flex justify-center text-lg font-bold'>Follow IMDb on social</p>
                        <div className='flex flex-wrap items-center justify-center gap-10 mt-2'>
                            {
                                socialIcons.map((social, index) => (
                                    <a href={social.link} key={index} className='text-white hover:text-[#F5C518]'>
                                        {social.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex sm:mt-6">
                        <div className="border-2 rounded-md py-4 px-8 border-[#1F1F1F] flex gap-6 max-xl">
                            <div>
                                <p className="font-bold text-lg">Get the IMDb App</p>
                                <p>For Android and iOS</p>
                            </div>
                            <div className="flex shrink-0 border rounded-md overflow-hidden border-slate-100">
                                <img src={qr} alt="QR Code" className="w-12 h-12 shrink-0 cursor-pointer object-cover hover:scale-105 transition-transform duration-200" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8 flex-wrap">
                    {
                        footerLinks.map((link, index) => (
                            <Link to="#" key={index} className="text-md  hover:underline mx-5">{link.name}</Link>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center mt-5 flex-wrap">
                    {
                        footerLinks2.map((link, index) => (
                            <Link to="#" key={index} className="text-md  hover:underline mx-5">{link.name}</Link>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center sm:mt-10 mt-4 mb-6">
                    <p className="text-sm  text-[#B3B3B3]">© 1990-2025 by IMDb.com, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer