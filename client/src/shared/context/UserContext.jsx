import React, { createContext, useState, useEffect } from 'react';

// Export the context so it can be imported directly
const context = createContext(null);

const UserProvider = ({ children }) => {
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

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider; 