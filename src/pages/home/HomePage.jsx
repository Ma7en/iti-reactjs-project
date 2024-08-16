/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// centext
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";
import MovieContext from "../../context/movieContext";

// import components
import Welcome from "../../components/welcome/Welcome";
import Movies from "../../components/movie/Movies";
import Loader from "../../components/loader/Loader";

function HomePage() {
    const navigate = useNavigate();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [moviesList, setMoviesList] = useState([]);
    // console.log(`eee`, moviesList);
    const [page, setPage] = useState(1);
    const [maxpages, setMaxpages] = useState(1);
    const [error, setError] = useState(null);

    // search
    const [moviesListSeacrh, setMoviesListSeacrh] = useState([]);
    const [query, setQuery] = useState("");
    // const [sFalse, setSFalse] = useState(false);

    // movies - 6
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2) ||
                            process.env.REACT_APP_BASE_API_Link
                        }movie/popular?api_key=${
                            process.env.REACT_APP_API_KEY.slice(1, -2) ||
                            process.env.REACT_APP_API_KEY
                        }&language=en-US&page=${page}`
                    )
                    .then((response) => {
                        // console.log(`22`, response);
                        setMoviesList(response.data.results);
                        setMaxpages(response.data.total_pages);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, [page]);

    // search movies
    useEffect(() => {
        const fetchMoviesSearch = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2) ||
                            process.env.REACT_APP_BASE_API_Link
                        }search/movie?api_key=${
                            process.env.REACT_APP_API_KEY.slice(1, -2) ||
                            process.env.REACT_APP_API_KEY
                        }&query=${query}`
                    )
                    .then((response) => {
                        // console.log(response);
                        setMoviesListSeacrh(response.data.results);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchMoviesSearch();
    }, [query]);

    if (!moviesList) return <Loader />;

    return (
        <>
            {/* <Loader /> */}
            <Welcome query={query} setQuery={setQuery} />

            {query ? (
                <MovieContext.Provider
                    value={{
                        moviesListSeacrh,
                        query,
                    }}
                >
                    <Movies />
                </MovieContext.Provider>
            ) : (
                <MovieContext.Provider
                    value={{
                        moviesList,
                        query,
                        page,
                        setPage,
                        maxpages,
                        setMaxpages,
                    }}
                >
                    <Movies />
                </MovieContext.Provider>
            )}
        </>
    );
}

export default HomePage;
