import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import george from "../../assets/georg.png";
import enemy from "../../assets/enemy.png";
import crate from '../../assets/crate.png'
import Actuallskills from "./Actuallskills";
import audi from '../../assets/416-[AudioTrimmer.com].mp3'
// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillSection = ({handlej}) => {
    const imgRef = useRef(null); // Reference for the animated image
    const [bloodVisible, setBloodVisible] = useState(false); // State to track blood effect
    const [health, sethealth] = useState(100)
    const [actualskil, setactualskil] = useState(1)
    useEffect(() => {
        // GSAP animation for the weapon image
        gsap.fromTo(
            imgRef.current,
            { x: "60%", opacity: 0, y: "50%" }, // Starting position
            {
                x: "30%", // Final position
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
const playsound = ()=>{
const audio = new Audio(audi)
audio.play()
}
    const handleBloodEffect = () => {
playsound()
        setBloodVisible(true);
        setTimeout(() => {
            setBloodVisible(false); // Hide blood effect after animation
        }, 1000); // Duration of blood effect
        sethealth(health - 20)
    };
    const handleactualskill = () => {
        const updatedskill = actualskil -1
        setactualskil(updatedskill)
        handlej(updatedskill)
    }
    
    return (
        <div>
            {
                actualskil != 0 ? (
                    <div className="overflow-hidden">
                        {/* Wrapper to avoid horizontal scrolling */}
                        <div className="flex justify-end relative h-screen">
                            {/* Background and enemy images */}
                            <div className="relative h-full w-full">
                                {/* Full-screen background image */}
                                <img className="h-full w-full object-cover" src={george} alt="Background" />
                                {/* Enemy image with onClick blood effect */}
                                {
                                    health != 0 ? <img
                                        className="absolute bottom-28 md:bottom-36 left-[200px] w-20 sm:w-30 cursor-pointer"
                                        src={enemy}
                                        alt="Enemy"
                                        onClick={handleBloodEffect} // Trigger blood effect on click
                                    /> :
                                        <img onClick={handleactualskill} className="absolute bottom-28 md:bottom-36 left-[200px] w-20 sm:w-30 cursor-pointer" src={crate} alt="" />
                                }


                                {/* Blood effect (only visible when state is true) */}
                                {bloodVisible && (
                                    <div className="absolute bottom-60 left-[200px] w-20 h-20 bg-red-600 rounded-full animate-bloodEffect"></div>
                                )}
                            </div>

                            {/* Weapon image with GSAP animation */}
                            <img
                                ref={imgRef}
                                className="w-1/3 bottom-64 md:bottom:auto absolute z-10"
                                src="https://pnghq.com/wp-content/uploads/pubg-gun-png-png-high-resolution-300x300.png"
                                alt="M4 Weapon"
                            />
                        </div>

                    </div>
                ) :
                    <div>
                        <Actuallskills />
                    </div>
            }


        </div>
    );
};

export default SkillSection;
