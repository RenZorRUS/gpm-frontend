import { ReactElement } from "react";
import { ChatsPage } from "@/pages/ChatsPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { FeedPage } from "@/pages/FeedPage";
import { FriendsPage } from "@/pages/FriendsPage";
import { ProfilePage } from "@/pages/ProfilePage";

interface RouteProps {
    path: string,
    element: ReactElement,
}

export enum AppRoutes {
    MAIN = 'main',
    FEED = 'feed',
    CHATS = 'chats',
    FRIENDS = 'friends',
    PROFILE = 'profile',
    ERROR = 'error',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FEED]: '/feed',
    [AppRoutes.CHATS]: '/chats/:id?',
    [AppRoutes.FRIENDS]: '/friends',
    [AppRoutes.PROFILE]: '/:username',
    [AppRoutes.ERROR]: '*',
}

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
    [AppRoutes.ERROR]: {
        path: routePaths.error,
        element: <ErrorPage />,
    },
}