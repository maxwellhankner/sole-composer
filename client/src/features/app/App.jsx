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
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove list styles */
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
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