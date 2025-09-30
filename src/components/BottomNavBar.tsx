import React, { useState } from 'react';
import DashboardIcon from './icons/DashboardIcon';
import BarChartIcon from './icons/BarChartIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import SlidersIcon from './icons/SlidersIcon';

interface BottomNavBarProps {
  onMenuSelect?: (index: number) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onMenuSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
    onMenuSelect?.(index);
  };

  const getSliderPosition = (index: number): string => {
    switch (index) {
      case 0: return '-translate-x-[258px]';
      case 1: return '-translate-x-[88px]';
      case 2: return 'translate-x-[88px]';
      case 3: return 'translate-x-[258px]';
      default: return '-translate-x-[258px]';
    }
  };

  return (
    <div
      className="w-[920px] h-[650px] rounded-[20px] flex justify-center items-end"
      style={{
        background: 'radial-gradient(circle at center bottom, #3612C2 0%, #9D0073 100%)'
      }}
    >
      <div className="relative bg-white h-[150px] w-3/4 mb-[150px] rounded-t-[50px] flex justify-around items-center">
        {/* Menu Icons */}
        <DashboardIcon
          className={`h-10 cursor-pointer z-10 transition-all duration-500 ${
            activeIndex === 0 ? 'mb-[60px] text-white' : 'text-[#C3C6CC]'
          }`}
          onClick={() => handleIconClick(0)}
        />

        <BarChartIcon
          className={`h-10 cursor-pointer z-10 transition-all duration-500 ${
            activeIndex === 1 ? 'mb-[60px] text-white' : 'text-[#C3C6CC]'
          }`}
          onClick={() => handleIconClick(1)}
        />

        <BookmarkIcon
          className={`h-10 cursor-pointer z-10 transition-all duration-500 ${
            activeIndex === 2 ? 'mb-[60px] text-white' : 'text-[#C3C6CC]'
          }`}
          onClick={() => handleIconClick(2)}
        />

        <SlidersIcon
          className={`h-10 cursor-pointer z-10 transition-all duration-500 ${
            activeIndex === 3 ? 'mb-[60px] text-white' : 'text-[#C3C6CC]'
          }`}
          onClick={() => handleIconClick(3)}
        />

        {/* Slider */}
        <div
          className={`absolute bg-white w-[150px] h-[150px] flex justify-center items-center -mt-[65px] rounded-full z-0 transition-transform duration-500 ${getSliderPosition(
            activeIndex
          )}`}
        >
          <div className="w-[100px] h-[100px] bg-[#E6258C] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
