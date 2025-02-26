import React from 'react';
import { cn } from "../../lib/utils";
import { P } from './typography';

export function LoadingScreen({ message = "Loading...", className, ...props }) {
  return (
    <div 
      className={cn(
        "fixed inset-0 bg-white z-[1]",
        className
      )}
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[150px] h-[150px] border-[16px] border-[#e9e9e9] border-t-[#333333] rounded-full animate-spin"></div>
        <p className="mt-4 text-[#333333] text-lg">{message}</p>
      </div>
    </div>
  );
}

export function ErrorScreen({ error, className, ...props }) {
  return (
    <div 
      className={cn(
        "min-h-screen flex items-center justify-center bg-white",
        className
      )}
      {...props}
    >
      <P className="text-red-500">Error: {error}</P>
    </div>
  );
} 