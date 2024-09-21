import css from "./Header.module.scss";
import { FC, ReactNode } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface HeaderProps {
    className?: string;
    children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({className = ""}) => {
    return (
        <div className={css.headerWrapper}>
            <div className={classNames(css.Header, {}, [className])}>
                {/*<Logo />*/}
                {/*<InternalSearch />*/}
                {/*<NotificationButton />*/}
                {/*<ProfileDropdown />*/}
                <ThemeSwitcher />
            </div>
        </div>
    );
};