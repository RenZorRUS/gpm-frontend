import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import css from "./Button.module.scss";

export const enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className = "",
        theme = "",
        children,
        ...restProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(css.Button, {}, [className, css[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;