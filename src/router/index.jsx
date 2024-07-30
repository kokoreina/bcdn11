import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
//Lazy load
const Movie = lazy(() => import("../atomic/pages/movie/movie"));
const Anime = Lazy(() => import("../atomic/pages/anime/anime"));
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <div>About</div>,
    },
    {
        path: "movie",
        element: (
            <Suspense fallback={<>Loading...</>}>
                <Movie />
            </Suspense>
        ),
    },
    {
        path: "tv-series",
        element: <>tv-series</>,
    },
    {
        path: "anime",
        element: (
            <Suspense fallback={<>Loading...</>}>
                <Anime />
            </Suspense>
        ),
    },
    {
        path: "*",
        // C1 custom page not found
        // element:<>Not found</>
        // mong muốn chuyển về trang home
        element: <Navigate to={"/"} replace></Navigate>,
    },
]);
