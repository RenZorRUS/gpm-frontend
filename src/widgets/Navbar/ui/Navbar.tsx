import css from "./Navbar.module.scss";
import { FC, ReactNode } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";

interface NavbarProps {
    className?: string;
    children?: ReactNode;
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
    // todo: NAVBAR
    return <div className={classNames(css.Navbar, {}, [className])}>Navbar</div>;
};
