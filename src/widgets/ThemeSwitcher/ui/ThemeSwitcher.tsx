import { FC } from "react";
import { Button } from "@/shared/ui/Button";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { Theme, useTheme } from "@/app/providers/theme";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button.tsx";
import ThemeSVG from "@/shared/assets/icons/theme.svg?react";
import css from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = "" }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(css.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            <ThemeSVG fill={theme === Theme.LIGHT ? "#1e2c60" : "#b5c8ff" } />
        </Button>
    );
};

export default ThemeSwitcher;