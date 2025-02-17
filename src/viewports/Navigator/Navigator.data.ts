import { createElement, lazy } from "react";
import { Route } from "./Navigator.types";

export const publicRoutes: Route[] = [
  {
    label: "Home",
    path: "/",
    element: createElement(lazy(() => import("@pages/Landing"))),
  },
];
