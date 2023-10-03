import { useCallback, useState, useEffect } from "react";

type Theme = "light" | "dark";

const useTheme = (initialTheme: Theme) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;

    if (storedTheme) {
      applyTheme(storedTheme);
    } else {
      applyTheme(initialTheme);
    }
  }, [initialTheme]);

  const applyTheme = useCallback(
    (newTheme: Theme) => {
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    },
    [theme]
  );

  const changeTheme = useCallback(
    (newTheme: Theme) => {
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  }, [theme, applyTheme]);

  return { theme, changeTheme, toggleTheme };
};

export default useTheme;
