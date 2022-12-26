import { useState } from 'react';
import axios from 'axios';

export default function useRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const request = async (
    url,
    method,
  ) => {
    setIsLoading(true);
    const createRequest = axios({
        url:url,
        method:method,
    })
      .then((data)=>data)
      .catch((error) => {
        console.log('error', error);
        setError(error);
        throw error;
      })
      .finally(() => setIsLoading(false));
    return await createRequest;
  };
  return { request, isLoading, error };
}