import { routeConfig } from "@/shared/config/routeConfig";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const AppRouter = () => {
    return (
        // todo: Fallback
        <Suspense fallback={null}>
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;