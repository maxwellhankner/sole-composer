import React from 'react';
import { BrowserRouter as Router, Route, Routes, createRoutesFromElements } from 'react-router-dom';
import { UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import UserProvider from '../context/UserContext.jsx';
import Landing from '../features/landing/Landing.jsx';
import Designer from '../features/designer/Designer.jsx';
import Login from '../features/auth/Login';
import Profile from '../features/profile/Profile';
import NoPage from '../features/error/NoPage';
import { AppContainer } from './styledComponents';
import 'sanitize.css';

function App() {
  return (
    <AppContainer>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/designer/:id" element={<Designer />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </UserProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
