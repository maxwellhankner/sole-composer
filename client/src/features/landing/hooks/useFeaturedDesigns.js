import { useState, useEffect } from 'react';
import { simpleFetch } from '../../../features/designer/utils/helpers/fetchHelpers';

export const useFeaturedDesigns = () => {
  const [featured, setFeatured] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await simpleFetch('/api/featured', 'GET');
        setFeatured(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return { featured, isLoading, error };
}; 