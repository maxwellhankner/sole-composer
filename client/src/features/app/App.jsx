import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from '../../context/UserContext.jsx';
import Landing from '../landing/Landing.jsx';
import Designer from '../designer/Designer.jsx';
import Login from '../auth/Login';
import Profile from '../profile/Profile';
import NoPage from '../nopage/NoPage';

function App() {
  return (
    <div className="min-h-screen text-base antialiased font-roboto selection:bg-black selection:text-white">
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
    </div>
  );
}

export default App; 