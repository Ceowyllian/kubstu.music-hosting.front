import { useEffect, useState } from 'react';

function useFetch(fetchFunction, params) {
  const [response, setResponse] = useState(null);

  const dump = JSON.stringify(params);
  useEffect(() => {
    let ignore = false;
    fetchFunction(params).then((r) => {
      if (!ignore) setResponse(r);
      return () => (ignore = true);
    });
  }, [fetchFunction, dump]);

  return response;
}

export default useFetch;
