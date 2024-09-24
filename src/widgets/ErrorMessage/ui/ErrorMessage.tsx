import css from "./ErrorMessage.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import LogoSVG from "@/shared/assets/icons/logo.svg?react";
import { Button } from "@/shared/ui/Button";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button.tsx";

interface ErrorMessageProps {
    className?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ className = "" }) => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(css.ErrorMessage, {}, [className])}>
            <LogoSVG className={css.errorMessageSVG} />
            <div>Oops... Something went wrong</div>
            <Button className={css.errorMessageButton} onClick={reloadPage} theme={ButtonTheme.SOLID}>
                Reload the page
            </Button>
        </div>
    );
};
