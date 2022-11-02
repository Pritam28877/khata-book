import React from 'react';

// components
import Header from 'src/components/Header';
import TrustScreen from 'src/components/TrustScreen';
import LoginForm from './LoginForm';

function Login() {
  return (
    <>
      <Header />
      <TrustScreen />
      <LoginForm />
    </>
  );
}

export default Login;
