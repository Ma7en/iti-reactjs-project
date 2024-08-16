import React, { useContext } from "react";

// context
import MovieContext from "../../context/movieContext";

// components
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Movies() {
    const { moviesList, moviesListSeacrh, query } = useContext(MovieContext);

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div
                className={` movies ${darkMode ? "text-bg-dark" : ""}`}
                style={{ minHeight: "100vh" }}
            >
                <div className="container py-3">
                    <div className="row">
                        <div className="title">
                            <h2 className="text-capitalize mb-5 fw-bold">
                                Popular Movies
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        {query
                            ? moviesListSeacrh.map((movie, index) => (
                                  <React.Fragment key={index}>
                                      <MovieCard movie={movie} />
                                  </React.Fragment>
                              ))
                            : moviesList?.map((movie, index) => (
                                  <React.Fragment key={index}>
                                      <MovieCard movie={movie} />
                                  </React.Fragment>
                              ))}
                    </div>

                    <div className="row py-5">
                        {query ? "" : <Pagination />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;
