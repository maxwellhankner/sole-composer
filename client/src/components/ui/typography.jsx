import { cn } from "../../lib/utils";

export function H1({ children, className, ...props }) {
  return (
    <h1 
      className={cn(
        "scroll-m-20 font-bold tracking-tight font-poppins",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }) {
  return (
    <h2 
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight font-poppins first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }) {
  return (
    <h3 
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight font-poppins",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function P({ children, className, ...props }) {
  return (
    <p 
      className={cn(
        "leading-7 font-roboto [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }) {
  return (
    <div 
      className={cn(
        "text-lg font-roboto font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Small({ children, className, ...props }) {
  return (
    <small 
      className={cn(
        "text-sm font-roboto font-medium leading-none",
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
}

export function Lead({ children, className, ...props }) {
  return (
    <p 
      className={cn(
        "text-xl font-roboto text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
} 