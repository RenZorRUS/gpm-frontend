import css from "./Logo.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { Button } from "@/shared/ui/Button";
import LogoExtended from "@/shared/assets/icons/logo.svg?react";

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({className = ""}) => {
    return (
        <Button
            className={classNames(css.Logo, {}, [className])}
        >
            <LogoExtended className={css.logoSVG} />
            <div className={css.logoText}>GPM</div>
        </Button>
    );
};