import css from "./ProfileLink.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { Button } from "@/shared/ui/Button";
import { useActive } from "@/shared/lib/hooks/useActive";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button.tsx";
import ProfileImage from "@/shared/assets/images/default-profile-image.jpg";
import ArrowSVG from "@/shared/assets/icons/arrow.svg?react";

interface ProfileLinkProps {
    className?: string;
}

export const ProfileLink: FC<ProfileLinkProps> = ({className = ""}) => {
    // todo: Implement dropdown menu
    const {active, toggleActive} = useActive();

    // todo: Fetch profile image & fallback image

    return (
        <Button
            className={classNames(css.ProfileLink, {}, [className])}
            theme={ButtonTheme.FILL}
            active={active}
            onClick={toggleActive}
        >
            <img
                className={css.profileLinkImage}
                src={ProfileImage}
                alt="profile image"
            />
            <ArrowSVG
                className={css.profileLinkArrow}
            />
        </Button>
    );
};