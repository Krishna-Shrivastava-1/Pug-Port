import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import audi from '../../assets/(Audio) 20241120-1701-39.0091528-[AudioTrimmer.com].m4a'
gsap.registerPlugin(ScrollTrigger);
import foodoo from '../../assets/fav-re.png'
import yout from '../../assets/youtubelogo.png'

const Projectdrop = ({handleprof}) => {
    const imgRef = useRef(null); // Reference for the image
    const openBtnRef = useRef(null); // Reference for the Open button
    const [coupon, setcoupon] = useState(4)
    const [popup, setpopup] = useState(false)
    useEffect(() => {
        // Scroll-triggered animation for the image drop
        gsap.fromTo(
            imgRef.current,
            { y: "-400%", opacity: 0 }, // Starting position: above the viewport
            {
                y: "0%", // Final position: original position
                opacity: 1, // Fully visible
                duration: 3, // Duration of the animation
                ease: "bounce.out", // Smooth bounce effect
                scrollTrigger: {
                    trigger: imgRef.current, // Trigger animation when image comes into view
                    start: "top 80%", // Animation starts when top of the image reaches 80% of viewport
                },
            }
        );
    }, []);
    const handlesuo = ()=>{
        const audo = new Audio(audi)
        audo.play()
    }
    const handleButtonClick = () => {
        if (coupon > 0) {
            handlesuo()
            const updatecoupon = coupon - 1
            setcoupon(updatecoupon)
            


        }


        // Button-triggered animation to drop the image
        if (coupon != 0) {
            gsap.fromTo(
                imgRef.current,
                { y: "-400%", opacity: 0 }, // Starting position
                {
                    y: "0%", // Final position
                    opacity: 1, // Fully visible
                    duration: 1.5, // Faster drop duration
                    ease: "bounce.out", // Bounce effect
                }
            );
        } else {
            setpopup(true)
        }
    };

    const dataproj = [{ id: 1, title: 'Youtube', link: 'https://youtuubbe.netlify.app/',image:yout,  para: 'In this Youtube Clone I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website' },
    { id: 2, title: 'Epic Games', link: 'https://epicgamess.netlify.app/', image: 'https://logos-world.net/wp-content/uploads/2021/12/Epic-Games-Symbol.png', para: 'In this Epic Games Clone I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website' },
    { id: 3, title: 'Foodoo', link: 'https://fooodoo.netlify.app/', image: foodoo, para: 'In this Food Recipe I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website' },
    { id: 4, title: 'Twitter (X)', link: 'https://twitu.netlify.app/', image: 'https://www.sarkarinaukriexams.com/images/import/sne21299025521.png', para: 'In this Twitter Clone I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website' }
    ]
    const handleprofo = ()=>{
        setpopup(false)
        handleprof(0)
    }
    
    return (
        <div>
            <div className="flex justify-center  flex-col">
                <div className="w-full justify-end items-center flex" >
                    <div className="text-white flex items-center justify-center p-3 gap-3" >
                        <img className="w-12" src="https://battlegroundsmobile.kr/hse03/event/202111/211115_classiccoupon_web_in.png" alt="" />
                        <p className="text-xl" >{coupon} </p>
                    </div>

                </div>
                {/* Image to animate */}
                <div className="flex items-center justify-center relative" >
                    <img
                        ref={imgRef}
                        src="https://i.pinimg.com/originals/45/42/5a/45425a6977f1e11631fd8d1b225296ec.png"
                        alt="Dropping Image"
                        className="w-40"
                    />
                    {
                        popup && (
                            <div className="absolute  z-10" >
                                <div className=" bg-zinc-800 text-white p-2 rounded-lg " >
                                    <h1>You don't have enough coupon <span className="text-yellow-600" > <h1>Hire me for more :)</h1></span> </h1>
                                    <div className="flex text-white items-center justify-between" >
                                        <div  className="p-1 px-2 cursor-pointer m-1 bg-yellow-600 rounded-md hover:bg-yellow-500 font-semibold" onClick={handleprofo} ><h1>I will try</h1></div>
                                        <div onClick={() => setpopup(false)} className="p-1 px-2 cursor-pointer font-semibold m-1 hover:bg-zinc-700 rounded-md" ><h1>Ok</h1></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>

                <div className="flex w-full justify-end items-center p-2">
                    {/* Button to trigger drop animation */}
                    <div
                        ref={openBtnRef}
                        className="border p-2 hover:border-none rounded-lg cursor-pointer select-none bg-zinc-700"
                        onClick={handleButtonClick} // Trigger animation on click
                    >
                        <h1 className="font-semibold text-xl text-white flex items-center justify-around gap-4">Open Once <img className="w-10" src="https://battlegroundsmobile.kr/hse03/event/202111/211115_classiccoupon_web_in.png" alt="" /> 1 </h1>
                        <p></p>
                    </div>
                </div>
                <div className="flex items-center justify-around flex-col" >
                    {
                        dataproj.slice(0, 4 - coupon).map(({ id, title, link, image ,para }) => (
                            <div key={id} className="flex items-center text-white flex-col border p-2 m-2 rounded-md" >
                                <div className="flex items-center justify-around w-full my-4" >
                                    <img className="w-28" src={image} alt="" />
                                <h1 className="text-2xl font-bold" > {title} </h1>     
                                </div>
                           
                                <p> {para} </p>
                                <a href={link} target="_blank" rel="noopener noreferrer">  <h1 className='text-black text-xl font-bold bg-yellow-600 p-1 px-5 rounded-md cursor-pointer select-none hover:bg-yellow-700 transition-all duration-200' >Start</h1></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projectdrop;

