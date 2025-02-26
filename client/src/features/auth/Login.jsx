import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../landing/ui/button';
import { P } from '../landing/ui/typography';

function Login() {
  const loginWithGoogle = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/google`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/google`, '_self');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-[400px] w-full mx-auto flex flex-col items-center gap-6 p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <P className="text-2xl font-bold">Welcome Back</P>
          <P className="text-gray-500">Sign in to continue to Sole Composer</P>
        </div>
        
        <div className="flex flex-col w-full gap-3">
          <Button 
            variant="outline" 
            onClick={() => loginWithGoogle()}
            className="w-full"
          >
            Login With Google
          </Button>
          <Link to="/" className="w-full">
            <Button 
              variant="secondary"
              className="w-full"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
