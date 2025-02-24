import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../features/landing/components/ui/button';

function Login() {
  const loginWithGoogle = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/google`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/google`, '_self');
    }
  };

  return (
    <div className="max-w-[400px] mx-auto flex flex-col h-screen justify-center p-4">
      <Button variant="outline" onClick={() => loginWithGoogle()}>
        Login With Google
      </Button>
      <Link to="/">
        <Button variant="outline">Back</Button>
      </Link>
    </div>
  );
}

export default Login;
