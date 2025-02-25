import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context with initial values
const UserContext = createContext({
  userData: null,
  isLoading: true,
  error: null,
});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/auth/getsession', {
          method: 'GET',
          credentials: 'include',
        });
        
        // Even if response is not OK, we'll handle it below instead of throwing
        const data = await response.json();
        
        if (data.err) {
          // If the error is "No Session", this is normal - just set userData to null
          if (data.err === "No Session") {
            setUserData(null);
            setError(null);
          } else {
            // Only set as error if it's a real error, not just absence of session
            setError(data.err);
          }
        } else {
          setUserData(data);
          setError(null);
        }
      } catch (err) {
        // This catches network errors or JSON parsing errors
        setError(err.message);
        setUserData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const value = {
    userData,
    isLoading,
    error,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  
  return context;
};

// For legacy support
UserProvider.context = UserContext;

export default UserProvider; 