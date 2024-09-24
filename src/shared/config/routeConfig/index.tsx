import { ReactElement } from "react";
import { ChatsPage } from "@/pages/ChatsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { FeedPage } from "@/pages/FeedPage";
import { FriendsPage } from "@/pages/FriendsPage";
import { ProfilePage } from "@/pages/ProfilePage";

interface RouteProps {
    path: string;
    element: ReactElement;
}

const enum AppRoutes {
    MAIN = "main",
    FEED = "feed",
    CHATS = "chats",
    FRIENDS = "friends",
    PROFILE = "profile",
    NOT_FOUND = "not_found",
}

const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.FEED]: "/feed",
    [AppRoutes.CHATS]: "/chats/:id?",
    [AppRoutes.FRIENDS]: "/friends",
    [AppRoutes.PROFILE]: "/:username",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePaths.main,
        element: <FeedPage />,
    },
    [AppRoutes.FEED]: {
        path: routePaths.feed,
        element: <FeedPage />,
    },
    [AppRoutes.CHATS]: {
        path: routePaths.chats,
        element: <ChatsPage />,
    },
    [AppRoutes.FRIENDS]: {
        path: routePaths.friends,
        element: <FriendsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: routePaths.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePaths.not_found,
        element: <NotFoundPage />,
    },
};
