import React from 'react';
import { StyleSheetManager, createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from '../../shared/context/UserContext.jsx';
import Landing from '../landing/Landing.jsx';
import Designer from '../designer/Designer.jsx';
import Login from '../auth/Login';
import Profile from '../profile/Profile';
import NoPage from '../error/NoPage';
import { AppContainer } from './styledComponents';
import 'sanitize.css';

const theme = {
  colors: {
    primary: '#000000',
    background: '#ffffff',
    text: '#000000'
  }
};

// Custom shouldForwardProp function to filter specific props
const shouldForwardProp = prop => 
  !['hsl', 'hsv', 'pointer'].includes(prop);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
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
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default App; 