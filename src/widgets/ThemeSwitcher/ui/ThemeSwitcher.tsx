import { FC } from "react";
import { Button } from "@/shared/ui/Button";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { useTheme } from "@/app/providers/ThemeProvider";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button.tsx";
import ThemeSVG from "@/shared/assets/icons/theme.svg?react";
import css from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = "" }) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(css.ThemeSwitcher, {}, [className])}
            theme={ButtonTheme.FILL}
            onClick={toggleTheme}
        >
            <ThemeSVG className={css.themeSwitcherSVG} />
        </Button>
    );
};
