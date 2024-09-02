import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PurpleBtn({ text }: { text: string }) {

    const handleMouseEnter = () => {
    };
    const handleMouseLeave = () => {
    }


    return (
        <>
            <div className="smooth-animate -ml-2 rounded-lg flex gap-x-5 overflow-hidden justify-start items-center relative text-white group hover:cursor-pointer">
                <div className="smooth-animate text-[0px] group-hover:text-lg bg-[#5e29f9] p-2 rounded-lg h-full aspect-square flex items-center justify-center absolute left-0 overflow-hidden -translate-x-10 group-hover:translate-x-0">
                    {">"}
                </div>


                <div className="smooth-animate relative flex p-2 ml-2 justify-between items-center size-full bg-[#5e29f9] translate-x-0 group-hover:translate-x-10">
                    <span className="smooth-animate text-center px-2 lemon-bold tracking-widest">{text}</span>
                    <a >
                        {">"}
                    </a>
                </div>
            </div>

        </>
    )
}
