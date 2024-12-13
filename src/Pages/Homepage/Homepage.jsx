import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import dres from '../../assets/pubgbgdres-removebg-preview.png'
import myin from '../../assets/myim-removebg-preview (1).png'
import SkillSection from '../../Components/SkillSection/SkillSection'
import Projectdrop from '../../Components/Projectsection/Projectdrop'
import Actuallskills from '../../Components/SkillSection/Actuallskills'
import Lobby from '../../Components/Lobby/Lobby'
import Profile from '../../Components/Profile/Profile'
const Homepage = () => {
    const [afterskill, setafterskill] = useState(true)
    const [lobby, setlobby] = useState(true)
    const [start, setstart] = useState(true)
    const handleprof = (r) => {
        if (r === 0) {
            setlobby(false)
        } else {
            setlobby(true)
        }
    }
    const handleproj = (e) => {
        if (e === 0) {
            setafterskill(false)
        } else {
            setafterskill(true)
        }

    }
    const handlestart =(t)=>{
        if (t === 0) {
            setstart(false)
        } else {
            setstart(true)
        }
    }
    return (
        <div>
            <div className='w-full sticky top-0 z-50 backdrop-blur-md' >
                <Navbar />
            </div>
            <div>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-around p-4 h-screen">
                    <div className="relative group">
                        {/* Pehli Image */}
                        <img
                            className="z-20 w-40 md:w-96"
                            src={dres}
                            alt=""
                        />
                        {/* Dusri Image */}
                        <div className="absolute bottom-[-20px] md:bottom-[170px] left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:translate-y-[-145px] opacity-0 group-hover:opacity-100">
                            <img
                                className="z-10 md:w-24 w-12 "
                                src={myin}
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <h1 className="text-white text-center mt-4 md:mt-0 md:text-left text-sm md:text-2xl font-extrabold ">
                        It’s not about be a Developer, it’s about How be a Developer.
                        <p className='text-center' >And a Innovator is 
                            <span className='text-red-600' > IRREPLACEABLE.</span></p>
                    </h1>
                    {/* <h1 className="text-white text-center mt-4 md:mt-0 md:text-left text-sm md:text-2xl font-extrabold ">
                        It’s not about being a Developer, it’s about being a Creator.
                        <p className='text-center' >And a Creator is UNSTOPPABLE
                            <span className='text-red-600' > IRREPLACEABLE.</span></p>
                    </h1> */}
                </div>
                {
                    start ?
                        <div>
                            <Profile handlestart={handlestart} />
                        </div> :
                        <div>
                            {

                                afterskill ? <div>
                                    <SkillSection handlej={handleproj} />
                                </div> :
                                    <div>
                                        <div>
                                            <Actuallskills />
                                        </div>
                                        <div>
                                            <Projectdrop handleprof={handleprof} />
                                        </div>
                                        {
                                            lobby ? null : <div id='contact' >
                                                <Lobby />
                                            </div>
                                        }

                                    </div>
                            }
                        </div>
                }





            </div>
        </div>
    )
}

export default Homepage
