import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='h-screen w-full bg-[#FFFFFF]'>
            <div className='max-w-4xl mx-auto p-2'>
                <div className='flex sm:flex-row flex-col mt-6 items-center sm:items-start'>
                    <div className='w-1/2' >
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-8 bg-[#F5C518] rounded-md"></div>
                                <h1 className='text-2xl font-bold pb-0.5'>Sign in</h1>
                            </div>
                            <button className='w-full bg-[#F5C518] text-black text-sm font-bold 
                            py-3.5 rounded-full sm:mt-6 mt-4 cursor-pointer hover:bg-[#E2B616]'>Create an account</button>
                            <div className="flex sm:mt-6 mt-4 items-center justify-center">
                                <hr className='w-1/3 border-t border-[#E0E0E0]' />
                                <span className='px-2'>or</span>
                                <hr className='w-1/3 border-t border-[#E0E0E0]' />
                            </div>
                            <button className='w-full bg-[#EBEBEB] text-[#0E63BE] text-sm font-bold py-3.5 rounded-full mt-4 hover:bg-[#DAE1E8] cursor-pointer'>Sign in to an existing account</button>
                            <p className='text-sm mt-6 text-[#757575]'>By signing in, you agree to IMDb's <Link to="#" className='text-[#0E63BE] hover:underline'> Conditions of Use </Link> and <Link to="#" className='text-[#0E63BE] hover:underline'> Privacy Notice </Link>.</p>
                        </div>

                    </div>

                    <div className='sm:w-1/2 w-0 hidden sm:flex '>
                        <div className="flex flex-col ml-8">
                            <p className='text-2xl font-bold mb-2'>It's so much better when you sign in</p>
                            <div className='mt-2'>
                                <p className='text-md font-bold'>Personalized recommendations</p>
                                <p className='text-[#757575]'>Titles tailored to your taste.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-md font-bold'>Your Watchlist</p>
                                <p className='text-[#757575]'>Track your future views and get reminders.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-md font-bold'>Your ratings</p>
                                <p className='text-[#757575]'>Rate and remember what you watch.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-md font-bold'>Contribute to IMDb</p>
                                <p className='text-[#757575]'>Add data that helps millions of fans.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-md font-bold'>Preferred services</p>
                                <p className='text-[#757575]'>Edit your preferred streaming services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn