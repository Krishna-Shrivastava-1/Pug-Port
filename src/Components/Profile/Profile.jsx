import React, { useEffect, useRef, useState } from 'react'
import max from '../../assets/maxresdefault-removebg-preview.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Profile = ({ handlestart }) => {
    const imgRef = useRef(null);
    useEffect(() => {
        // GSAP animation for the weapon image
        gsap.fromTo(
            imgRef.current,
            { x: "-60%", opacity: 0, y: "50%" }, // Starting position
            {
                x: "0%", // Final position
                opacity: 1, // Fully visible
                duration: 3, // Animation duration
                ease: "power2.out", // Smooth easing
                scrollTrigger: {
                    trigger: imgRef.current, // Element that triggers the animation
                    start: "top 90%", // Animation starts when top of element is 90% in viewport
                    end: "top 30%", // Animation ends when top reaches 30% of viewport
                    scrub: false, // Animation not synced with scroll
                },
            }
        );
    }, []);
    const [seconds, setSeconds] = useState(5)
    const [showtime, setshowtime] = useState(false)
    const hando = () => {
        setSeconds(5);
        const countdown = setInterval(() => {
            setSeconds((prev) => {
                if (prev > 1) return prev - 1;
                clearInterval(countdown); // Clear interval when countdown ends
                return 0;
            });
        }, 1000);
        setTimeout(() => {
            const jhg = 0
            handlestart(jhg)
        }, 5000);
        setshowtime(true)


    }
    return (
        <div>
            <div className='w-full flex-col flex items-center justify-center' >
                <div className='relative w-full flex-col flex items-center justify-center overflow-hidden' >
                    <div className='z-20' >
                        <img className='w-56 z-30 ' src={max} alt="" />
                    </div>


                    <div ref={imgRef} className='absolute  z-10 left-0 bottom-30 w-full ' >
                        <img className='w-64 ' src="https://th.bing.com/th/id/R.8faf70fe4bdd9c07019d7501ecf14df1?rik=iatC7UI9pAcfxw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f3%2fPUBG-Car-PNG.png&ehk=3OPpmDNGcidGbs7niIgcK01cZ0K%2fV%2b%2frMpwM7wfbQzI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>

                </div>
                <div onClick={hando} className="flex items-center justify-start w-full p-3">
  <div className="flex items-center justify-center gap-2 bg-yellow-600 p-2 px-6 rounded-md cursor-pointer select-none hover:bg-yellow-700 transition-all duration-200">
    <h1 className="text-black text-2xl font-extrabold">Start</h1>
    {showtime && (
      <p className="text-black text-lg font-semibold">{seconds > 0 ? `${seconds}s` : null}</p>
    )}
  </div>
</div>



            </div>
        </div>
    )
}

export default Profile
