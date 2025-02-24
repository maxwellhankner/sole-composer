import * as React from "react"
import { Link } from 'react-router-dom';
import { Button } from '../../../../shared/ui/button';
import { useUserContext } from '../../../../shared/context/UserContext';

export function Header() {
  const { userData } = useUserContext();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[46px] bg-black text-gray-50">
        <div className="h-full max-w-[1100px] mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-white no-underline hover:opacity-90">
            <span className="font-bold">Sole</span> Composer
          </Link>

          {userData ? (
            <Link 
              to="/profile" 
              className="text-white no-underline hover:opacity-90 transition-opacity"
            >
              {userData.firstName}
            </Link>
          ) : (
            <Button 
              variant="outline"
              disabled
            >
              Login (Disabled)
            </Button>
          )}
        </div>
      </header>
      <div className="w-full h-[46px]" /> {/* Spacer for fixed header */}
    </>
  );
} 