import gsap from 'gsap';
import React from 'react'
import partnerLinks from '../assets/partnerImg.json';
export default function PartnerSec() {
    // get random 6 items from partnerLinks
    //
    const [links, setLinks] = React.useState(partnerLinks.slice(0, 6));


    const handleCycleClick = async () => {
        const tl = gsap.timeline()
        // animate a class name grid-item
        await tl.to(".grid-item", {
            duration: 0.5,
            stagger: 0.1,
            top: -100,
            opacity: 0,
        });
        // make a array of random 6 elements from partnerLinks
        const randomLinks = partnerLinks.sort(() => 0.5 - Math.random()).slice(0, 6);
        // set the state to the randomLinks
        setLinks(randomLinks);
        // Then, scale back up and fade in
        await tl.to(".grid-item", {
            duration: 0.5,
            stagger: 0.1,
            top: 0,
            opacity: 1,
        });


    }



    return (
        <div className="bg-white rounded-lg shadow-lg text-black md:grid grid-cols-5">
            <div className="p-[3rem] col-span-2 flex flex-col gap-y-2 order-last ">
                <h1 className="lemon-bold text-[12vw] md:text-[5vw] md:leading-[4vw] leading-[10.5vw] text-[#010561] mt-5 text-center uppercase">Masters In Your
                    SaaS Landscape</h1>
                <p className="text-[#010561] text-book text-clamp text-center">We integrate seamlessly with your platforms and team, crafting revenue-boosting strategies that continue to benefit your company long-term.</p>
            </div>
            <div className="relative group w-full flex items-center justify-center col-span-3">

                <div onClick={handleCycleClick} className="order-2 hover:rotate-180 duration-500 absolute md:-right-8 md:top-[40%] z-10 w-[4rem] h-[4rem] rounded-full bg-gray-200 hover:bg-gray-300 -top-8 items-center flex justify-center text-2xl  group-hover:cursor-pointer">

                    🔄
                </div>


                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 w-full h-full overflow-y-hidden ">
                    {/* TODO:use pictures */}
                    {
                        links.map((_, index) => (
                            <div key={index} className="overflow-y-hidden">
                                <div className="bg-gray-200 size-full">
                                    <div className="grid-item relative bg-white size-full">
                                        <div className="flex flex-col items-center justify-center p-5 border-t-[1px] size-full border-r-[1px]  border-gray-200">
                                            <img src={_} alt="partner" className="w-24 aspect-[3/1]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
