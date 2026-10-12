import { useState, useEffect } from "react";

export function useCurrency() {
  const [currency, setCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

        const response = await fetch("https://ipapi.co/json/", { signal: controller.signal });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        if (data.currency) {
          setCurrency(data.currency);
        }
      } catch (error) {
        // Fallback to browser locale - silent if successful
        try {
          const localeCurrency = new Intl.NumberFormat().resolvedOptions().currency;
          if (localeCurrency) {
            setCurrency(localeCurrency);
          } else {
            setCurrency("USD");
          }
        } catch (e) {
          setCurrency("USD");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrency();
  }, []);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return { currency, isLoading, formatAmount };
}
