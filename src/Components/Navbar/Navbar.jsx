import React from 'react'
import resume from '../../assets/Resume OF Webdev.pdf'
const Navbar = () => {
    return (

        <div className='w-full flex items-center justify-around p-3 bg-[#00000083]' >
            <div className='cursor-pointer select-none' >
                <h1 className='text-white font-semibold text-lg' >Krish</h1>
            </div>
            <div className='text-white   border-yellow-500 border rounded-full p-1 px-3 cursor-pointer hover:bg-yellow-600 transition-all duration-300 hover:border-zinc-700 hover:border font-semibold' >
                <h2>  <a className='   cursor-pointer   transition-all duration-700   text-nowrap' href={resume} download='Krishna Resume.pdf'>

                    Download Resume

                </a></h2>
            </div>
        </div>

    )
}

export default Navbar
