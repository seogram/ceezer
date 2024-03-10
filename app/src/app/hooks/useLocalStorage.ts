import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function useLocalStorage(key:string, defaultValue:string) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue && storedValue !== "undefined") {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}