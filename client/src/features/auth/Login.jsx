import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer } from './Login.styles';
import { Button } from '../../components/ui/button';

function Login() {
  const loginWithGoogle = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/google`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/google`, '_self');
    }
  };

  return (
    <LoginContainer>
      <Button variant="outline" onClick={() => loginWithGoogle()}>
        Login With Google
      </Button>
      <Link to="/">
        <Button variant="outline">Back</Button>
      </Link>
    </LoginContainer>
  );
}

export default Login;
