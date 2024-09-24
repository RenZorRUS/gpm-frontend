import { routeConfig } from "@/shared/config/routeConfig";
import { Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react";
import { Loader } from "@/widgets/Loader";

interface AppRouterProps {
    className?: string;
}

const AppRouter: FC<AppRouterProps> = ({ className = "" }) => {
    return (
        <Suspense fallback={<Loader />}>
            <div className={className}>
                <Routes>
                    {Object.values(routeConfig).map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;
