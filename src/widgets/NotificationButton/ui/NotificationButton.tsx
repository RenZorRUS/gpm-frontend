import css from "./NotificationButton.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/helpers/classNames.ts";
import { Button } from "@/shared/ui/Button";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button.tsx";
import { useActive } from "@/shared/lib/hooks/useActive";
import NotificationBellSVG from "@/shared/assets/icons/notification_bell.svg?react";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = ({
    className = "",
}) => {
    // todo: Implement drop-down notification menu
    const { active, toggleActive } = useActive();

    return (
        <Button
            className={classNames(css.NotificationButton, {}, [className])}
            active={active}
            theme={ButtonTheme.FILL}
            onClick={toggleActive}
        >
            <NotificationBellSVG className={css.notificationButtonSVG} />
        </Button>
    );
};
