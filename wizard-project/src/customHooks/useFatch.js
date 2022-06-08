import { useEffect, useState } from "react";

export const useFatch = (url, change) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((value) => setData(value));
  }, [url, change]);

  return { data, setData };
};
