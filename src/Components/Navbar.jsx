import React, { use, useState } from 'react'
import logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion'
import { MdLocalMovies } from "react-icons/md";
import { MdOutlineTv } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [openCategory, setOpenCategory] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [language, setLanguage] = useState("EN");
  const [openLanguage, setOpenLanguage] = useState(false);

  const categories = ["All", "Titles", "TV Episodes", "Celebs", "Companies", "Keywords", "Advanced Search"];
  const languages = ["EN", "ES", "FR", "DE", "IT", "ZH"];

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className='w-full h-14 p-3 text-slate-100 bg-black '>
      <div className='max-w-7xl mx-auto h-full flex items-center  sm:gap-2'>
        <div onClick={() => setOpenMenu(true)} className='sm:hidden flex items-center justify-center rounded-full py-1 gap-1 cursor-pointer px-4 hover:bg-[#252525]'>
          <IoMenu className='h-6 w-6 cursor-pointer' />

        </div>
        <img onClick={handleClick} className='h-8 cursor-pointer hover:opacity-95' src={logo} alt="logo" />
        <div onClick={() => setOpenMenu(true)} onKeyDown={(e) => { if (e.key === 'Enter') setOpenMenu(true) }} role="button" tabIndex={0} className='hidden sm:flex items-center justify-center rounded-full py-1 gap-1 cursor-pointer px-4 hover:bg-[#252525]'>
          <IoMenu className='h-6 w-6' />
          <span className='text-sm font-bold items-start -mt-0.5'>Menu</span>
        </div>
        <div className='w-[705px] bg-white h-8 rounded-sm sm:flex items-center justify-between overflow-visible focus-within:ring-2 focus-within:ring-[#E4B716] transition-all duration-300 hidden'>
          <div className='h-full  hover:bg-[#EDEDED] hover:rounded-sm '>
            <div className='relative h-full w-full'>
              <div onClick={() => setOpenCategory(!openCategory)} className='flex items-center gap-1 px-3 h-full cursor-pointer w-full border-r border-gray-400'>
                <span className='text-sm text-black font-bold'>{category}</span>
                <MdArrowDropDown size={22} className=' text-black' />
              </div>
              {openCategory && (
                <div className='absolute top-8 left-0 bg-white shadow-lg z-10 w-max text-amber-500'>
                  {categories.map((cat, index) => (
                    <div key={index} onClick={() => { setCategory(cat); setOpenCategory(false); }} className='px-4 py-2 hover:bg-gray-200 cursor-pointer whitespace-nowrap'>
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='hidden sm:flex items-center px-3 w-full '>
            <input className=' w-full text-black focus:outline-none' type="text" />
            <IoMdSearch size={24} className='text-gray-500 cursor-pointer' />
          </div>
        </div>
        <div className='sm:hidden flex items-center justify-end w-full '>
          <IoMdSearch size={24} className='text-gray-500 cursor-pointer' />
        </div>
        <div className='lg:flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full hidden'>
          <span className='font-bold'>IMDb</span>
          <span className='font-bold text-[#14B2D6]'>Pro</span>
        </div>
        <div className="h-8 border-l border-gray-700"></div>
        <div className='lg:flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full hidden'>
          <BsBookmarkPlusFill size={18} className='mr-1 ' />
          <span className='font-bold text-sm'>Watchlist</span>
        </div>
        <Link to="registration/signin">
          <div className='flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full'>
            <p className='font-bold text-sm whitespace-nowrap'>Sign in</p>
          </div>
        </Link>
        <div className='flex  items-center justify-center px-3 cursor-pointer bg-[#F5C518] text-black rounded-full h-full lg:hidden'>
          <span className='font-bold text-sm whitespace-nowrap'>Use app</span>
        </div>
        <div onClick={() => setOpenLanguage(!openLanguage)} className='lg:flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full hidden'>
          <span className='font-bold text-sm'>{language}</span>
          <MdArrowDropDown size={22} className='ml-1' />
          {openLanguage && (
            <div className='absolute top-12 right-3 bg-white shadow-lg z-10 w-max text-amber-500'>
              {languages.map((lang, index) => (
                <div key={index} onClick={() => { setLanguage(lang); setOpenLanguage(false); }} className='px-4 py-2 hover:bg-gray-200 cursor-pointer whitespace-nowrap'>
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Mobile menu (animated drawer) */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setOpenMenu(false)}
            />

            {/* desktop curtain (falls from top) */}
            <motion.div
              className="hidden sm:block fixed top-0 left-0 w-full z-50 max-h-screen overflow-y-auto scrollbar-none"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="w-full bg-[#1F1F1F] ">
                <div className="max-w-5xl mx-auto py-8 p-4 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img src={logo} alt="logo" className="h-12" />
                  </div>
                  <button onClick={() => setOpenMenu(false)} aria-label="Close menu" className="w-12 h-12 rounded-full font-bold bg-[#F6C800] text-black text-blac cursor-pointer hover:brightness-95">✕</button>
                </div>
                <div className="max-w-5xl mx-auto px-4 pb-4">
                  <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full'>
                    <div className='flex flex-col'>
                      <div className=' p-4 text-xl font-bold flex items-center'>
                        <MdLocalMovies size={25} className='inline-block mr-2 text-[#F6C800]' />
                        <span>Movies</span>
                      </div>
                      <div className='px-12 w-full'>
                        <ul className="flex flex-col space-y-2 mt-2 text-white text-lg">
                          <li className="cursor-pointer hover:text-[#F6C800]">Release calendar</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Top 250 movies</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Most popular movies</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Browse movies by genre</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Top box office</li>
                          <li className="cursor-pointer hover:text-[#F6C800] ">Showtimes & tickets</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Movie news</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">India movie spotlight</li>
                        </ul>
                      </div>
                    </div>

                    <div className='flex flex-col'>
                      <div>
                        <div className=' p-4 text-xl font-bold flex '>
                          <MdOutlineTv size={25} className='inline-block mr-2 text-[#F6C800]' />
                          <span>TV Shows</span>
                        </div>
                        <div className='px-12 w-full'>
                          <ul className="flex flex-col space-y-2 mt-2 text-white text-lg">
                            <li className="cursor-pointer hover:text-[#F6C800]">What's on TV streaming</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">Top 250 TV shows</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">Most popular TV shows</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">Browse TV shows by genre</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">TV News</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className=' p-4 text-xl font-bold flex mt-9'>
                          <BiCameraMovie size={25} className='inline-block mr-2 text-[#F6C800]' />
                          <span>Watch</span>
                        </div>
                        <div className='px-12 w-full'>
                          <ul className="flex flex-col space-y-2 mt-2 text-white text-lg">
                            <li className="cursor-pointer hover:text-[#F6C800]">What TO Watch</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">Latest trailers</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">IMDb Originals</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">IMDb Picks</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">IMDb Spotlight</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">Family Entertainment Guide</li>
                            <li className="cursor-pointer hover:text-[#F6C800]">IMDb Podcasts</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col'>
                      <div className=' p-4 text-xl font-bold flex '>
                        <FaRegStar size={25} className='inline-block mr-2 text-[#F6C800]' />
                        <span>Awards</span>
                      </div>
                      <div className='px-12 w-full'>
                        <ul className="flex flex-col space-y-2 mt-2 text-white text-lg">
                          <li className="cursor-pointer hover:text-[#F6C800]">Oscar </li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Scary Good Horror</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Halloween Family Fun</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">AFI Film Fest Guide</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">STARMeter Awards</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">Awards Central</li>
                          <li className="cursor-pointer hover:text-[#F6C800]">All events</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* side drawer for mobile */}
            <motion.aside
              className="sm:hidden fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#0b0b0b] z-50 shadow-2xl text-white"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-4 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="logo" className="h-8" />
                  <span className="font-bold text-lg">Menu</span>
                </div>
                <button onClick={() => setOpenMenu(false)} aria-label="Close menu" className="px-2 py-1 rounded hover:bg-gray-800">✕</button>
              </div>
              <nav className="p-4">
                <ul className="flex flex-col gap-3">
                  <li className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">Home</li>
                  <li className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">Most popular celebrities</li>
                  <li className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">Watchlist</li>
                  <li className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">IMDbPro</li>
                  <li className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">Settings</li>
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar