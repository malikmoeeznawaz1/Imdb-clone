import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BsBookmarkPlusFill } from "react-icons/bs";


const Navbar = () => {
  const [category, setCategory] = useState("All");
  const [openCategory, setOpenCategory] = useState(false);

  const [language, setLanguage] = useState("EN");
  const [openLanguage, setOpenLanguage] = useState(false);

  const categories = ["All", "Titles", "TV Episodes", "Celebs", "Companies", "Keywords", "Advanced Search"];
  const languages = ["EN", "ES", "FR", "DE", "IT", "ZH", "JA"];

  return (
    <div className='w-full h-14 p-3 text-slate-100 bg-black'>
      <div className='max-w-7xl mx-auto h-full flex items-center gap-2'>
        <img className='h-8 cursor-pointer hover:opacity-95' src={logo} alt="logo" />
        <div className='flex items-center justify-center rounded-full py-1 gap-1 cursor-pointer px-4 hover:bg-[#252525]'>
          <IoMenu className='h-6 w-6' />
          <span className='text-sm font-bold items-start -mt-0.5'>Menu</span>
        </div>
        <div className='w-[705px] bg-white h-8 rounded-sm flex items-center justify-between overflow-visible focus-within:ring-2 focus-within:ring-[#E4B716] transition-all duration-300'>
          <div className='h-full  hover:bg-[#EDEDED] hover:rounded-sm'>
            <div className='relative h-full w-full'>
              <div onClick={() => setOpenCategory(!openCategory)} className='flex items-center gap-1 px-3 h-full cursor-pointer w-full border-r-[1px] border-gray-400'>
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
          <div  className='flex items-center px-3 w-full'>
            <input className=' w-full text-black focus:outline-none' type="text" />
            <IoMdSearch size={24} className='text-gray-500 cursor-pointer' />
          </div>
        </div>
        <div className='flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full'>
          <span className='font-bold'>IMDb</span>
          <span className='font-bold text-[#14B2D6]'>Pro</span>
        </div>
        <div className="h-8 border-l-[1px] border-gray-700"></div>
        <div className='flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full'>
          <BsBookmarkPlusFill size={18} className='mr-1 ' />
          <span className='font-bold text-sm'>Watchlist</span>
        </div>
        <div className='flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full'>
          <p className='font-bold text-sm whitespace-nowrap'>Sign In</p>
        </div>
        <div onClick={() => setOpenLanguage(!openLanguage)} className='flex items-center justify-center px-3 cursor-pointer hover:bg-[#252525] rounded-full h-full'>
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
    </div>
  )
}

export default Navbar