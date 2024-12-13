import React, { useState } from 'react'
import myim from '../../assets/myim.png'
import crown from '../../assets/crown-removebg-preview.png'
import ace from '../../assets/ace.png'
import Contactus from '../../Components/Contactus/Contactus.jsx'
const Lobby = () => {
    const [about, setabout] = useState(true)
    const [education, seteducation] = useState(false)
    const [connect, setconnect] = useState(false)
    const [avail, setavail] = useState(false)
    const basicin = () => {
        setabout(true)
        seteducation(false)
        handleTabClick("about")
    }
    const educatio = () => {
        setabout(false)
        seteducation(true)
        handleTabClick("education")

    }
    const connectio = () => {
        setabout(false)
        seteducation(false)
        setconnect(true)
        handleTabClick("connect")
    }
    const availu = () => {
        setabout(false)
        seteducation(false)
        setconnect(false)
        setavail(true)
        handleTabClick("available")
    }
    const [activeTab, setActiveTab] = useState("about");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div>
            <div className='flex items-center justify-between w-full ' >
                <div className='h-screen flex items-center  w-full' >
                    {
                        about ? <div className='p-2 flex flex-col items-center justify-center text-center'  >
                            <img className='rounded-lg' src={myim} alt="" />
                            <p className='text-white text-lg' >I am an Fresher Front end developer with having expertise in this field.Thorught my journey I have learned so much new things in this journey to be a proffesional developer</p>
                        </div> : education ?
                            <div className='p-2 w-full flex-col flex items-center justify-center ' >
                                <h1 className='text-white font-semibold text-2xl my-8'  >Qualification History</h1>
                                <div className='flex items-center justify-center w-full gap-7 flex-wrap' >

                                    <div className='flex items-center justify-center text-center text-white flex-col' >
                                        <img className='w-36' src={crown} alt="" />
                                        <h1>Completed 10th in 2021</h1>
                                    </div>
                                    <div className='flex items-center justify-center text-center text-white flex-col' >
                                        <img className='w-36' src={ace} alt="" />
                                        <h1>Completed Diploma in Civil Engineering in 2024</h1>
                                    </div>
                                    <div className='flex items-center justify-center text-center text-white flex-col' >
                                        <img className='w-36' src="https://1.bp.blogspot.com/-r-dhq00U-dM/YOvmDBY9WoI/AAAAAAAAAWA/IaSAmLkYIBExgPFBMTor6TlzerNh0PVcACLcBGAsYHQ/s650/PngItem_6846701.png" alt="" />
                                        <h1>Pursuing Btech in Computer Science</h1>
                                    </div>
                                </div>
                            </div>
                            : connect ?
                                <div className='flex items-center justify-center w-full' >  <Contactus />  </div>
                                :
                                avail &&
                                <div className='flex flex-wrap items-center justify-center w-full gap-6 cursor-pointer  pb-5 text-white' >
                                    <h1 className='text-xl font-bold' >Available on :</h1>
                                    <div className='flex flex-wrap items-center justify-center w-full gap-6 cursor-pointer  pb-5 text-white' >

                                        <a target='_blank' href="https://www.linkedin.com/in/krishna-shrivastava-62b72129a/">
                                            <div className='flex items-center justify-center gap-4 hover:text-yellow-500 ' >
                                                <img className='w-16' src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png" alt="" />
                                                <h2 className='text-xl font-bold' >Linked in</h2>
                                            </div>
                                        </a>
                                        <a target='_blank' href="https://x.com/Krishrinastava">
                                            <div className='hover:text-yellow-500  flex items-center justify-center gap-4' >
                                                <img className='w-16' src="https://www.sarkarinaukriexams.com/images/import/sne21299025521.png" alt="" />
                                                <h2 className='text-xl font-bold' >X ( Twitter )</h2>
                                            </div>
                                        </a>
                                        <a target='_blank' href="https://github.com/Krishna-Shrivastava-1">
                                            <div className='hover:text-yellow-500  flex items-center justify-center gap-4' >
                                                <img className='w-16' src="https://th.bing.com/th/id/R.5cd9f30e245cbdcc11274951e439ad65?rik=Sz61vyzVAebTKQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgithub-logo-png-white-github-11-icon-free-white-social-icons-256x256.png&ehk=ui79L3vfGaeid0nrxXxzViwTkmF9nuWIXWX3zBAN51o%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                                <h2 className='text-xl font-bold' >Github</h2>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                    }
                </div>
                <div className="p-1">
                    <div
                        onClick={basicin}
                        className={`text-white text-lg font-bold cursor-pointer select-none px-5 text-nowrap whitespace-nowrap my-3 transition-all duration-300 ${activeTab === "about" ? "border-l-2 border-yellow-400 " : "border-none"
                            }`}
                    >
                        <h1>Basic Info</h1>
                    </div>
                    <hr />
                    <div
                        onClick={educatio}
                        className={`text-white text-lg font-bold cursor-pointer select-none px-5 text-nowrap whitespace-nowrap my-3 transition-all duration-300 ${activeTab === "education" ? "border-l-2 border-yellow-400" : "border-none"
                            }`}
                    >
                        <h1>Education</h1>
                    </div>
                    <hr />
                    <div
                        onClick={connectio}
                        className={`text-white text-lg font-bold cursor-pointer select-none px-5 text-nowrap whitespace-nowrap my-3 transition-all duration-300 ${activeTab === "connect" ? "border-l-2 border-yellow-400" : "border-none"
                            }`}
                    >
                        <h1>Connect Us</h1>
                    </div>
                    <hr />
                    <div
                        onClick={availu}
                        className={`text-white text-lg font-bold cursor-pointer select-none px-5 text-nowrap whitespace-nowrap my-3 transition-all duration-300 ${activeTab === "available" ? "border-l-2 border-yellow-400" : "border-none"
                            }`}
                    >
                        <h1>Available</h1>
                    </div>
                </div>
                );


            </div>
        </div>
    )
}

export default Lobby
