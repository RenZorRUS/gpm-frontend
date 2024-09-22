import { createContext } from "react";

export const enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
export const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeContext = createContext<ThemeContextProps>({
    theme: defaultTheme,
    setTheme: (): void => {},
});
