import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Logo } from "@/widgets/Logo";
import { NotificationButton } from "@/widgets/NotificationButton";
import css from "./Header.module.scss";
import { ProfileLink } from "@/widgets/ProfileLink";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({className = ""}) => {
    return (
        <div className={css.headerWrapper}>
            <div className={classNames(css.Header, {}, [className])}>
                <Logo/>
                {/*  todo: Implement internal search for users / posts  */}
                {/*  <InternalSearch />  */}
                <div className={css.headerButtonContainer}>
                    <NotificationButton/>
                    <ThemeSwitcher/>
                </div>
                <ProfileLink />
            </div>
        </div>
    );
};