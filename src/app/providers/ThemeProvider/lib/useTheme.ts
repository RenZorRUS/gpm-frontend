import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext.ts";
import { useCallback, useContext } from "react";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme]);

    return { theme, toggleTheme };
}
