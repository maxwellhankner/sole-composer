import React from 'react';
import { cn } from "../../lib/utils";
import { P } from './typography';

export function LoadingScreen({ message = "Loading...", className, ...props }) {
  return (
    <div 
      className={cn(
        "min-h-screen flex flex-col items-center justify-center bg-white",
        className
      )}
      {...props}
    >
      <div className="w-12 h-12 border-4 border-t-primary rounded-full animate-spin mb-4"></div>
      <P>{message}</P>
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