import { useEffect, useState } from "react";

export const useFatch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((value) => setData(value));
  }, [url]);

  return { data, setData };
};
