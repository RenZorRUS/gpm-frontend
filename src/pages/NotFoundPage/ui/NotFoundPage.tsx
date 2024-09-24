import css from "./NotFoundPage.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import LogoSVG from "@/shared/assets/icons/logo.svg?react";

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className = "" }) => {
    return (
        <div className={classNames(css.NotFoundPage, {}, [className])}>
            <LogoSVG className={css.notFoundPageSVG} />
            <div>Page not found</div>
        </div>
    );
};

export default NotFoundPage;
