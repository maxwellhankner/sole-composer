import React from 'react';
import { BrowserRouter as Router, Route, Routes, createRoutesFromElements } from 'react-router-dom';
import { UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import UserProvider from '../context/UserContext.jsx';
import Landing from '../containers/Landing/index.jsx';
import Designer from '../containers/Designer/index.jsx';
import Login from '../containers/Login/index.jsx';
import Profile from '../containers/Profile/index.jsx';
import NoPage from '../containers/NoPage/index.jsx';
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
