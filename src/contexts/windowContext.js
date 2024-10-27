import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const Context = createContext({});

const useWindowContext = () => useContext(Context);

const WindowProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const values = useMemo(
    () => ({
      windowWidth,
      windowHeight,
    }),
    [windowWidth, windowHeight]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { useWindowContext, WindowProvider };
