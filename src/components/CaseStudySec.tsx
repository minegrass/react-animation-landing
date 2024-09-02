import React from 'react'
import LeftBtnGray from './LeftBtnGray';
import RightBtnGray from './RightBtnGray';
import PurpleBtn from './PurpleBtn';
import caseStudy from '../assets/case-studies.json'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CaseStudySec() {

    const [currentCaseStudy, setCurrentCaseStudy] = React.useState(0)
    const revealTexts = gsap.utils.toArray(".study-text-reveal");
    const handleNextCaseStudy = async () => {
        const action = () => { setCurrentCaseStudy((prev) => (prev === caseStudy.length - 1 ? 0 : prev + 1)); }
        textAnimation(action);
    }
    const textAnimation = async (action: () => void) => {
        const tl = gsap.timeline();
        await tl.to(".study-text-reveal", {
            stagger: 0.1,
            y: -500,
        }
        )
        await action();
        await tl.to(".study-text-reveal", {
            stagger: 0.1,
            y: 0,
        }
        )
    }
    const handlePrevCaseStudy = async () => {
        const action = () => { setCurrentCaseStudy((prev) => (prev === 0 ? caseStudy.length - 1 : prev - 1)) };
        textAnimation(action);

    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-[3rem] text-black">
            <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="w-full flex items-center flex-col ">
                    <h1 className="text-book-ultralight text-2xl">LATEST CASE STUDIES</h1>
                    <div className="h-4 border-[1px] border-gray rounded-md w-[50%] mt-5 relative overflow-hidden">
                        <div className={`h-4 smooth-animate bg-[#5e29f9] w-[100%] rounded-md absolute`} style={{ translate: `${-(101 - (currentCaseStudy / (caseStudy.length - 1)) * 101)}% 0` }} />
                    </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-x-2  mt-5">
                    <div onClick={handlePrevCaseStudy}>
                        <LeftBtnGray /></div>
                    <div onClick={handleNextCaseStudy}>
                        <RightBtnGray /></div>
                </div>
            </div>
            <div className="hidden md:block my-2 border-[1px] border-gray-200" />
            <div className="overflow-hidden flex justify-center">
                <h1 className="lemon-bold text-[min(5rem,7vw)] md:w-[80%]  leading-[min(4rem,5.5vw)] text-[#010561] mt-5 text-center uppercase study-text-reveal ">{caseStudy[currentCaseStudy].title}
                </h1></div>
            <div className="flex items-center justify-center w-full  mt-5">
                <div className="flex flex-col md:flex-row gap-3 w-[80%] md:w-full">
                    {
                        caseStudy[currentCaseStudy].stats.map((stat, index) => (
                            <div key={index} className="w-full flex flex-row gap-x-2 justify-around items-center px-2 rounded-lg bg-gray-100 border-[1px] border-gray-200">
                                <div className="overflow-hidden">
                                    <h1 className="study-text-reveal text-[clamp(50px,6.944vw,120px)] lemon-bold text-[#5e29f9] text-clamp ">{stat.stat} </h1>
                                </div><div className="overflow-hidden w-[80%]">
                                    <h1 className="study-text-reveal  text-[#010561] text-book text-clamp "> {stat.description}</h1>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="flex justify-center items-center mt-5">
                <div className="w-[60%] md:w-[30%]">
                    <PurpleBtn text="view case study" />
                </div>
            </div>

        </div>
    )
}
