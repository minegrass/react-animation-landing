
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { TextPlugin } from 'gsap/all';
import PurpleBtn from './components/PurpleBtn';
import BottomLineBtn from './components/BottomLineBtn';
import ServiceSec from './components/ServiceSec';
import PartnerSec from './components/PartnerSec';
import CaseStudySec from './components/CaseStudySec';
import ReviewSec from './components/ReviewSec';
import Sidebar from './components/Sidebar';
gsap.registerPlugin(TextPlugin, useGSAP)

function App() {
  const b2bStats = [
    {
      number: "567",
      symbol: "%",
      text: "Gross profit surge",
    },
    {
      number: "500",
      text: "Consecutive Inc. 500 spot holder",
    },
    {
      number: "02",
      symbol: "nd",
      text: "2nd Fastest-growing company in California",
    }
  ]
  const firstAnimateSecRef = useRef(null);
  const animateStar = useRef(null);


  // first-animate-sec pin the star elephant star from original position go down to below more y 100
  useGSAP(() => {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".theAnimateSec",
        start: 'top 30%',
        end: '+=50%',
        scrub: 0.2,
        toggleActions: 'play none none reverse',
        anticipatePin: 1
      }
    })

    gsap.to(".animate-star", {
      scrollTrigger: {
        trigger: ".animate-star",
        start: 'top 20%',
        end: '+=50%',
        pin: true,
        scrub: 0.2,
        toggleActions: 'play none none reverse',
        anticipatePin: 1
      },
      rotate: 360,
      ease: "power3.inOut",
      transition: 1



    })
    // the-logo do some animation when meet a the-section
    tl.fromTo(".the-logo", {
      x: 0,
      opacity: 1
    }, {
      x: -100,
      opacity: 0,
      ease: "power3.inOut",
      transition: 1
    }, 0
    )

    tl.fromTo(".the-big-logo", {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      ease: "power3.inOut",
      transition: 1
    }, 0
    )

  })



  return (
    <>
      <Sidebar />

      <div className="px-[1vw] py-[10rem]">
        <div className="flex gap-y-12 flex-col">
          <div className="w-full justify-center items-center text-center">
            {/*title*/}
            <h1 className="text-book-ultralight text-4xl leading-[2rem]">Marketing
              <br />
              That Fuels</h1>
          </div>
          <div className="w-full justify-center items-center text-center text-book text-2xl">
            <p>Supercharge your growth journey<br />
              with 'Be the Buzz' – your B2B<br />
              SaaS marketing ally.</p>
          </div>
        </div>
        {/* cards container */}
        <div className="flex flex-col gap-y-5">
          <h1 className="text-[42vw] lemon-bold text-center -mt-[5.5rem] -mb-32">
            GROWTH
          </h1>
          <div className="flex gap-2 flex-col md:grid grid-cols-10  theAnimateSec" ref={firstAnimateSecRef}>
            {/* card */}
            <div className="bg-white rounded-lg shadow-lg p-[3rem] text-black col-span-6 ">
              <div className="md:grid md:grid-cols-4 md:grid-rows-2 gap-x-2">
                <div className="row-span-3 hidden md:block">
                  <h1 className="text-[5vw] animate-star inline-block will-change-transform" ref={animateStar}>⭐</h1>
                </div>
                <img alt="" loading="lazy" width="511" height="346" className="w-[85vw] col-span-3 row-span-2" decoding="async" data-nimg="1" src="https://images.prismic.io/bethebuzz-cms/ZgL2JccYqOFdyGDS_img-10-.png?auto=format%2Ccompress&amp;fit=max&amp;w=1080" />
                <h1 className=" col-span-3 place-content-center lemon-bold text-[10vw] md:text-[5vw] md:leading-[4vw] leading-[8vw] text-[#010561] mt-5">We Fuel the Buzz That
                  Fuels Your Growth</h1>
              </div>
              <p className="text-[#010561] text-book text-clamp mt-5">In the world of B2B SaaS companies, brand recognition is pivotal.
                We prioritize aligning sales & marketing for partnership-led success for real business outcomes over vanity metrics,
                focusing on revenue, market positioning, and tangible brand growth. We don't just create buzz;
                we shape it to speak the language of your B2B SaaS audience.</p>
              <div className="w-1/2 mt-5">
                <PurpleBtn text="book a consultant" /></div>
            </div>
            {/* card end */}
            {/* card */}
            <div className="bg-white rounded-lg shadow-lg p-[5rem] text-black md:-order-1 col-span-4">

              <h1 className="lemon-bold text-[12vw]  md:text-[5vw] md:leading-[4vw]  leading-[10.5vw] text-[#010561] mt-5 text-center uppercase">Crafting B2B
                SaaS <span className="bg-[#5e29f9] px-[2px] text-white rounded-lg">Success</span>
                with Marketing
                Mastery</h1>
              <p className="text-[#010561] text-book text-clamp text-center mt-5">Results from a Cybersecurity Company after 36 months of partnership with Be the Buzz</p>
              <div className="flex flex-col items-center mt-5">
                <div className="flex flex-col gap-y-2 w-full">
                  {
                    b2bStats.map((item, index) => (
                      <div key={index} className="flex flex-row items-center justify-around p-3 py-1 rounded-lg bg-gray-100  border-gray-500">

                        <h1 className="text-[5rem] md:text-[3.5rem] lemon-bold text-[#5e29f9] text-clamp ">{item.number}<span className="text-lg ml-2">{item.symbol} </span> </h1>

                        <h1 className="text-[#010561] text-book text-clamp w-[50%]"> {item.text}</h1>
                      </div>
                    ))
                  }
                </div>
                <div className="mt-5" />
                <BottomLineBtn text="view case study" link="#" />
              </div>
            </div>
            {/* card end */}
            <div className="col-span-full">

              <PartnerSec />
            </div>
          </div>
        </div>
        {/* services section */}
        <section>
          <div className="justify-center items-center w-full mt-10">
            <div className="text-center flex flex-col">
              <h2 className="text-book-ultralight text-2xl">Explore our tailor-made</h2>
              <h1 className="text-[40vw] -my-12 lemon-bold text-center text-outline text-transparent">SERVICES</h1>
            </div>
          </div>
          <ServiceSec />

        </section>
        <div className="w-full p-3 lemon-bold bg-[#5e29f9] rounded-lg my-2 uppercase tracking-wider text-2xl justify-between flex hover:cursor-pointer hover:bg-[#6a39f8]">
          <span>all services</span>
          <span>➡️</span>
        </div>
        <CaseStudySec />
        {/* #FIXME: abit buggy animation */}
        <section className=" mt-24">
          <div className="text-center ">
            <h2 className="text-book-ultralight text-3xl uppercase">hear it from our</h2>
            <h1 className="text-[40vw] lemon-bold text-center text-outline text-transparent -mb-24 -mt-24">CLIENTS</h1>
          </div>
          <ReviewSec />
        </section >


      </div >
    </>
  )
}

export default App
