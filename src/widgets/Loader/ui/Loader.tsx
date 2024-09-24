import css from "./Loader.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = "" }) => {
    return (
        <div className={classNames(css.Loader, {}, [className])}>
            {/* todo: Rework Loader into skeleton? */}
            <div className={css.loaderBody} />
            <div className={css.loaderMessage}>Loading</div>
        </div>
    );
};
