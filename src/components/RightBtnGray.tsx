import React from 'react'

export default function RightBtn() {
    return (
        <div className="smooth-animate relative group overflow-hidden flex flex-row rounded-md">
            <div className="smooth-animate hover:cursor-pointer p-5 px-12 text-3xl bg-gray-100 rounded-md group-hover:translate-x-full">
                ➡️
            </div>
            <div className="smooth-animate absolute hover:cursor-pointer p-5 px-12 text-3xl bg-purple-100 rounded-md -translate-x-full group-hover:translate-x-0">
                <span className="smooth-animate group-hover:scale-x-0">➡️</span>
            </div>
        </div>
    )
}
