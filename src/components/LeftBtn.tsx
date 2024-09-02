import React from 'react'

export default function LeftBtn() {
    return (
        <div className="smooth-animate relative group overflow-hidden flex flex-row rounded-md">
            <div className="smooth-animate hover:cursor-pointer p-5 bg-gray-100 rounded-md group-hover:-translate-x-full">
                ⬅️
            </div>
            <div className="smooth-animate absolute hover:cursor-pointer p-5 bg-purple-500 rounded-md translate-x-full group-hover:translate-x-0">
                <span className="smooth-animate group-hover:scale-x-0">⬅️</span>
            </div>
        </div>
    )
}
