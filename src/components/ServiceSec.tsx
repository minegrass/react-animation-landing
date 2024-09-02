import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { motion, scroll, useScroll } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedRightBtn from './animatedRightBtn'
import gsap from 'gsap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
gsap.registerPlugin(ScrollTrigger, useGSAP)
export default function ServiceSec() {
    const serviceSec = useRef(null);
    useGSAP(() => {
        let mm = gsap.matchMedia();
        // only at tailwind lg size
        mm.add('(min-width: 1024px)', () => {
            let st = ScrollTrigger.create({
                trigger: serviceSec.current,
                start: 'top 20%',
                end: '+=2000px',
                scrub: true,
                pin: true,
                pinSpacing: true,
            });

            const cards = gsap.utils.toArray(".service-card")
            cards.forEach((card, index) => {
                gsap.from(card, {
                    scaleY: 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 20%',
                        end: '+=2000px',
                        scrub: true,
                        toggleActions: 'play none none reverse'
                    }
                })
            })
            const textReveal = gsap.utils.toArray(".service-text-reveal")
            textReveal.forEach((text, index) => {
                gsap.from(text, {
                    y: 100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: text,
                        start: '+=1000px',
                        end: '+=300px',
                        scrub: true,
                        toggleActions: 'play none none reverse'
                    }
                })
            })
        });


    })


    return (
        <>
            <div className="service-sec overflow-y-auto" ref={serviceSec}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    loop={true}
                    className="lg:hidden"
                >
                    {

                        Array(3).fill(0).map((_, index) => (
                            <SwiperSlide key={index}>
                                <ServiceCard />
                            </SwiperSlide>

                        ))
                    }
                </Swiper>

                <div className="lg:grid hidden grid-cols-3 grid-rows-1 gap-x-10">

                    {
                        Array(3).fill(0).map((_, index) => (
                            <ServiceCard key={index} />

                        ))
                    }


                </div>
            </div>
        </>
    )
}



export function ServiceCard() {
    return (
        <>
            <div className="service-card will-change-transform">
                <div className=" bg-white rounded-lg shadow-lg text-black aspect-[1/1.05] flex flex-col p-3 items-center gap-y-5 h-full">
                    <div className="overflow-hidden"><h1 className="rotating-star text-[min(5rem,12vw)] inline-block -mb-[min(1rem,2vw)] service-text-reveal ">💠</h1>
                    </div><div className="overflow-hidden w-full flex justify-center">

                        <h1 className="service-text-reveal w-[50%] text-center lemon-bold text-[min(3rem,12vw)]  leading-[min(2.4rem,10.5vw)] text-[#010561] mt-5 uppercase">go-to-market strategy & integration</h1>
                    </div><div className="overflow-hidden">
                        <p className="service-text-reveal text-[#010561] text-book text-clamp  text-center w-[90%]">Refine your market entry with our strategies informed by deep market research. We thoroughly integrate with your operations, leveraging analytics to drive your revenue goals.</p>
                    </div><div className="overflow-hidden p-3">
                        <div className="service-text-reveal">


                            <AnimatedRightBtn />

                        </div></div>

                </div>
                <div>

                </div>
            </div>
        </>
    )
}
