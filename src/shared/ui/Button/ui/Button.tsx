import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import css from "./Button.module.scss";

export const enum ButtonTheme {
    CLEAR = "clear",
    FILL = "fill",
    SOLID = "solid",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    active?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className = "", active = false, theme = ButtonTheme.CLEAR, children, ...restProps } = props;

    return (
        <button
            type="button"
            className={classNames(css.Button, { [css.active]: active }, [css[theme], className])}
            {...restProps}
        >
            {children}
        </button>
    );
};
