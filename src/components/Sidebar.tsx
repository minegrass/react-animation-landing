import React, { useState } from 'react'
import BottomLineBtn from './BottomLineBtn'

export default function Sidebar() {
    const sidebarItems = [
        { title: "services", link: "#", color: "purple" },
        { title: "plans", link: "#", color: "orange" },
        { title: "success stories", link: "#", color: "red" },
        { title: "blog", link: "#", color: "pink" },
    ]
    const [isSidebar, setIsSidebar] = useState(false)
    const handleHamburgerClick = () => {
        setIsSidebar(!isSidebar)
    }
    return (
        <>
            <div>
                <div onClick={() => { setIsSidebar(!isSidebar) }} className={`w-[100%] h-[100vh] fixed  ${isSidebar ? "bg-purple-500 opacity-50 z-10" : "bg-transparent -z-10"}`}>
                </div>
                <div className={`pt-10 w-[100vw] md:w-[80%] h-[100vh] bg-[#f2f2f7]  fixed p-[3vw] z-20 duration-1000 text-black ${isSidebar ? "translate-x-0 md:translate-x-[25%]" : "translate-x-full md:translate-x-[150%]"}`} >
                    <div className={`duration-[2000ms] ${isSidebar ? "mt-0 opacity-100" : " mt-10 opacity-0"}`}>

                        {sidebarItems.map((item) => <div className="flex">
                            <div className="group overflow-hidden relative hover:cursor-pointer text-[clamp(50px,6.944vw,11vh)] lemon-bold">
                                <h1 className={`smooth-animate absolute translate-y-full group-hover:translate-y-0`} style={{ color: item.color }}>{item.title}</h1>

                                <h1 className="smooth-animate group-hover:-translate-y-full ">{item.title}</h1>
                            </div>
                        </div>)}
                        <div className="flex flex-row gap-x-5">
                            <BottomLineBtn text="team" link="#" />
                            <BottomLineBtn text="careers" link="#" />
                        </div>
                    </div>

                </div>

            </div >

            <nav>
                <div className="fixed top-0 w-full overflow-hidden z-20">
                    <div className="flex flex-row justify-between">
                        <div className="m-2">
                            <h1 className="the-big-logo absolute text-black">BIG LOGO</h1>
                            <h1 className="the-logo absolute -z-10">logo</h1>

                        </div>

                        <div onClick={() => { handleHamburgerClick() }} className=" text-xl w-10 h-10 p-1 content-baseline burger bg-white shadow-md hover:cursor-pointer ">
                            <div className="relative">

                                <div className={`fixed text-black smooth-animate ${isSidebar ? "translate-x-[unset]" : "translate-x-[130%]"}`}>
                                    <div className={`absolute right-10 smooth-animate ${isSidebar ? "opacity-100" : "opacity-0"}`}>Close </div>🍟
                                </div>
                                <div className={`fixed smooth-animate ${isSidebar ? "translate-x-[130%]" : "translate-x-[unset]"} `}>
                                    🍔
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
