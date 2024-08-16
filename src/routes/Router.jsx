/* eslint-disable react/jsx-no-undef */
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loader
import Loader from "../components/loader/Loader";

// lazy loading pages
const HomepageLayout = lazy(() =>
    import("../components/layouts/Homepagelayout")
);

const HomePage = lazy(() => import("../pages/home/HomePage"));

const WatchListPage = lazy(() =>
    import("../pages/WatchListPage/WatchListPage")
);

const MovieDetails = lazy(() => import("../pages/details/MovieDetails"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoute() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomepageLayout />}>
                            {/* home page */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/movieapp" element={<HomePage />} />
                            <Route path="/movie" element={<HomePage />} />
                            <Route path="/moviestar" element={<HomePage />} />
                            <Route
                                path="/iti-movie-app"
                                element={<HomePage />}
                            />

                            {/* watchlist page */}
                            <Route
                                path="/watchlist"
                                element={<WatchListPage />}
                            />
                            <Route path="/watch" element={<WatchListPage />} />

                            {/* Details pages */}
                            <Route
                                path="/movie/:id"
                                element={<MovieDetails />}
                            />
                            <Route
                                path="/movieapp/:id"
                                element={<MovieDetails />}
                            />
                        </Route>

                        {/* NotFound or Error pages */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}
export default AppRoute;
