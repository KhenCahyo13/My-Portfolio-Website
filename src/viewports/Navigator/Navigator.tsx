import { FC, Suspense } from "react";
import { Route, Routes } from "react-router";
import { publicRoutes } from "./Navigator.data";
import MainLayout from "@components/layouts/MainLayout";
import NavigatorFallback from "./Navigator.fallback";

const Navigator: FC = () => (
    <Suspense fallback={<NavigatorFallback />}>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.label}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>
        </Routes>
    </Suspense>
);

export default Navigator;
