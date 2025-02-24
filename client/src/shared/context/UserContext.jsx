import React, { createContext, useState, useEffect, useContext } from 'react';

// Export the context so it can be imported directly
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('/auth/getsession', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
        } else {
          setUser(data);
        }
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const userData = useContext(UserContext);
  return { userData };
};

// For legacy support
UserProvider.context = UserContext;

export default UserProvider; 