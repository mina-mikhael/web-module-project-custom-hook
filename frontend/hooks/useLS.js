import { useState } from "react";

const useLS = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key)) {
      return (JSON.parse(localStorage.getItem(key)));
    }

    localStorage.setItem(key, JSON.stringify(initialValue));

    return initialValue;
  });

  const setStoredState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return ([state, setStoredState]);
};

export default useLS;
