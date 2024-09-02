import React from 'react'

export default function BottomLineBtn({ text, link }: { text: string, link: string }) {
    return (

        <a className="flex w-fit" href={link}>
            <div className="group hover:cursor-pointer ">
                <p className="group-hover:text-[#5e29f9] text-[#010561] uppercase">
                    {text}</p>
                <div className="w-full bg-transparent border-2 rounded-full border-gray-200 overflow-hidden ">
                    <div className=" bg-[#5e29f9] w-[110%] h-[5px] rounded-full ease-in-out duration-[500ms] -translate-x-[110%] group-hover:translate-x-[-5%]">

                    </div>
                </div>
            </div>
            <div>

            </div>
        </a>

    )
}
