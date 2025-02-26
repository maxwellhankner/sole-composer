import React from 'react';

export function LeftInterfaceContainer({ children, className = '' }) {
  return (
    <div className={`bg-[#212121] rounded-[9px] ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceTitle({ children, className = '' }) {
  return (
    <p className={`text-[18px] mx-[14px] my-[10px] text-white ${className}`}>
      {children}
    </p>
  );
}

export function InterfaceDoubleButtons({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-[6px] m-[6px] ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceSingleButtons({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-1 gap-[6px] m-[6px] ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceTitleAndIcon({ children, className = '' }) {
  return (
    <div className={`flex justify-between m-[6px] ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceTitleBox({ children, className = '' }) {
  return (
    <div className={`h-[46px] flex flex-col justify-center ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceButtonBox({ children, className = '' }) {
  return (
    <div className={`w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px] ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceButton({ children, $active = false, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] ${$active ? 'text-white' : 'text-[#bbbbbb]'} p-0 text-base focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export function InterfaceIconButtonBox({ children, className = '' }) {
  return (
    <div className={`box-border border border-[#343434] rounded-[6px] bg-black p-[3px] ml-[6px] ${className}`}>
      {children}
    </div>
  );
}

export function InterfaceIconButton({ children, $active = false, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`box-border border rounded-[3px] w-[38px] h-[38px] p-0 text-base flex flex-col justify-center items-center focus:outline-none ${
        $active 
          ? 'border-[#343434] bg-[#212121] [&>svg]:text-white' 
          : 'border-black bg-black [&>svg]:text-[#343434]'
      } ${className}`}
    >
      {children}
    </button>
  );
} 