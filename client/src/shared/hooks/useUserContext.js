import { useContext } from 'react';
import UserProvider from '../context/UserContext';

export const useUserContext = () => {
  const userData = useContext(UserProvider.context);
  return { userData };
}; 