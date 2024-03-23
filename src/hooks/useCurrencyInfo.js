import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
