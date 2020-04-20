import React,{ useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (key) => {
  const [theme, setTheme] = useLocalStorage(key);
  useEffect(() => {
      const body = document.querySelector('body');
    if(theme){
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

  },[theme])

  return [ theme, setTheme ];
};

export default useDarkMode;
