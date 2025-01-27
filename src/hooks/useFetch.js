import { useEffect, useState } from "react";

function useFetch(fetchFunction, ...params) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchFunction({...params}).then(r => {
      if (!ignore) setResponse(r);
      return () => ignore = true;
    })
  }, [fetchFunction, ...params]);

  return response;
}

export default useFetch;
