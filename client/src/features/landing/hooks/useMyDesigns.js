import { useState, useEffect } from 'react';
import { simpleFetch } from '../../../features/designer/utils/helpers/fetchHelpers';

export const useMyDesigns = (userData) => {
  const [myDesigns, setMyDesigns] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyDesigns = async () => {
      if (!userData) return;

      setIsLoading(true);
      try {
        const data = await simpleFetch('/api/outlines/mydesigns', 'GET');
        setMyDesigns(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyDesigns();
  }, [userData]);

  return { myDesigns, isLoading, error };
}; 