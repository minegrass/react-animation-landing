import React from 'react'
import LeftBtn from './LeftBtn'
import RightBtn from './RightBtn'
import reviews from '../assets/reviews.json'
import gsap from 'gsap'

export default function ReviewSec() {
    const [currentReview, setCurrentReview] = React.useState(0)
    const [nextReview, setNextReview] = React.useState(0)

    const handleNextReview = () => {
        reviewAnimate(() => { setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1)) })
        // base on currentReview set a next and next more index for the next review
        setNextReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))

    }

    const handlePrevReview = () => {
        reviewAnimate(() => { setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1)) })
        setNextReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))



    }

    const reviewAnimate = async (action: () => void) => {

        const tl = gsap.timeline()

        await tl.to(".review-text-reveal", {
            duration: 1,
            opacity: 0,
            y: 300,
            overwrite: "auto",
        }).to(".lil-star", {
            rotate: -270,
            duration: 1,
            text: "🌟",
            overwrite: "auto",

        }, 0
        ).to(".lil-pic", {
            scaleX: 0,
            xPercent: -200,
            duration: 1,
            overwrite: "auto",

        }, 0).to(".lil-prev-pic", {
            left: 0,
            duration: 1,
            overwrite: "auto",

        }, 0
        )


        action();

        await tl.to(".review-text-reveal", {
            duration: 1,
            opacity: 1,
            y: 0,
            overwrite: "auto",
        }).to(".lil-star", {
            rotate: 0,
            duration: 1,
            text: "⭐",
            overwrite: "auto",

        }, 0
        ).to(".lil-pic", {
            scaleX: 1,
            xPercent: 0,
            duration: 1,
            overwrite: "auto",

        }, 0).set(".lil-prev-pic", {
            left: "100%",
            overwrite: "auto",
        }, 0)


    }
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg mx-24 pb-5 smooth-animate ">
                <div className="py-[1rem] smooth-animate px-[3rem] text-black">
                    <div>
                        <div className="flex justify-between items-center">
                            <div onClick={handlePrevReview}>
                                <LeftBtn />
                            </div>
                            <div className="relative overflow-hidden">
                                <img src={reviews[currentReview].image} className="lil-pic aspect-square rounded-lg w-[12rem] " width={32} height={32} />
                                <img src={reviews[nextReview].image} className="absolute top-0 left-full lil-prev-pic aspect-square z-10 rounded-lg w-[12rem]" width={32} height={32} />
                            </div>
                            <div onClick={handleNextReview}>
                                <RightBtn />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="overflow-hidden">
                                <h1 className="lemon-bold text-[12vw]  leading-[10.5vw] text-[#010561] mt-5 text-center uppercase review-text-reveal">{reviews[currentReview].name}</h1>
                            </div>
                            <div className="overflow-hidden">
                                <p className="uppercase text-gray-400 review-text-reveal">{reviews[currentReview].position}</p>
                            </div>
                            <div className="text-5xl">
                                <span className="lil-star inline-block">⭐</span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="overflow-hidden">
                            <p className="text-[#010561] text-center review-text-reveal">
                                {reviews[currentReview].review}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
