import css from "./Logo.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { Button } from "@/shared/ui/Button";
import LogoSVG from "@/shared/assets/icons/logo.svg?react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({ className = "" }) => {
    const navigate = useNavigate();

    const redirectToMain = () => {
        navigate(routePaths.main);
    };

    return (
        <Button className={classNames(css.Logo, {}, [className])} onClick={redirectToMain}>
            <LogoSVG className={css.logoSVG} />
            <div className={css.logoText}>GPM</div>
        </Button>
    );
};
