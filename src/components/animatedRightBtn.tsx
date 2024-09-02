import React, { useState } from 'react';

const animatedRightBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`
        relative w-12 h-12 bg-[#5e29f9] text-white rounded-full
        overflow-hidden transition-all duration-300 ease-in-out
        hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          absolute inset-0 flex items-center justify-center
          transition-transform duration-300 ease-in-out
          ${isHovered ? 'translate-x-full' : 'translate-x-0'}
        `}
            >
                ➡️
            </div>
            <div
                className={`
          absolute inset-0 flex items-center justify-center
          transition-transform duration-300 ease-in-out
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                ➡️
            </div>
        </button>
    );
};

export default animatedRightBtn;