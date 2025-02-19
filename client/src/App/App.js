import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from '../UserProvider';
import Landing from '../containers/Landing';
import Designer from '../containers/Designer';
import Login from '../containers/Login';
import Profile from '../containers/Profile';
import NoPage from '../containers/NoPage';
import { AppContainer } from './styledComponents';
import 'sanitize.css';

function App() {
  return (
    <AppContainer>
      <Router>
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
