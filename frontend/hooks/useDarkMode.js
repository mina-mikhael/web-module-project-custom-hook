import useLS from "./useLS";

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLS("darkMode", initialValue);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
