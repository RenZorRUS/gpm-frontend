import css from "./ProfileLink.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { Button } from "@/shared/ui/Button";
import { useActive } from "@/shared/lib/hooks/useActive";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button.tsx";
import ArrowSVG from "@/shared/assets/icons/arrow.svg?react";

interface ProfileLinkProps {
    className?: string;
}

export const ProfileLink: FC<ProfileLinkProps> = ({ className = "" }) => {
    // todo: Implement dropdown menu
    const { active, toggleActive } = useActive();

    // todo: Fetch profile image & fallback image

    return (
        <Button
            data-testid="ProfileLink"
            className={classNames(css.ProfileLink, {}, [className])}
            theme={ButtonTheme.FILL}
            active={active}
            onClick={toggleActive}
        >
            <img
                className={css.profileLinkImage}
                src="src/shared/assets/images/default-profile-image.jpg"
                alt="profile image"
            />
            <ArrowSVG className={css.profileLinkArrow} />
        </Button>
    );
};
