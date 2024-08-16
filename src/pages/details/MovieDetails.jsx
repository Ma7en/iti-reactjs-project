import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// component
import MovieCard from "../../components/movie/MovieCard";
import Stars from "../../components/movie/Stars";
import Loader from "../../components/loader/Loader";
import NoRecommendation from "../../components/details/NoRecommendation";
import AddWatchLater from "../../components/movie/AddWatchLater";

// assest
import backdrop_image from "../../assets/Images/error/no-image-available.jpg";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function MovieDetails() {
    const { id } = useParams();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [movie, setMovie] = useState(null);

    const [loadingMovie, setLoadingMovie] = useState(false);

    const [recommendMovie, setRecommendMovie] = useState(null);

    const [error, setError] = useState(false);

    // get movie # https://api.themoviedb.org/3/movie/533535?language=en-US
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2) ||
                            process.env.REACT_APP_BASE_API_Link
                        }movie/${id}?api_key=${
                            process.env.REACT_APP_API_KEY.slice(1, -2) ||
                            process.env.REACT_APP_API_KEY
                        }&language=${language}`
                    )
                    .then((response) => {
                        // console.log(`eee-->`, response);
                        setMovie(response.data);
                        // setMoviesList(response.data.results);
                        // setMaxpages(response.data.total_pages);
                    });
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        fetchMovies();
    }, [id, language]);

    // get Recommendations #
    useEffect(() => {
        const fetchMoviesRecommend = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2) ||
                            process.env.REACT_APP_BASE_API_Link
                        }movie/${id}/recommendations?api_key=${
                            process.env.REACT_APP_API_KEY.slice(1, -2) ||
                            process.env.REACT_APP_API_KEY
                        }&language=${language}`
                    )
                    .then((response) => {
                        // console.log(response);
                        setRecommendMovie(response.data.results);
                    });
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        fetchMoviesRecommend();
    }, [id, language]);

    if (!movie) return <Loader />;
    // if (error) return <Empty resourceName="movies" />;

    const {
        poster_path,
        backdrop_path,
        title,
        release_date,
        vote_average,
        vote_count,
        overview,
        genres,
        runtime,
        homepage,
        spoken_languages,
        production_companies,
    } = movie;

    return (
        <>
            <div className={`moviedetails ${darkMode ? "text-bg-dark" : ""}`}>
                <div className="container py-5 border-bottom">
                    <div className="row g-4 ">
                        <div className="col-12 col-md-4 col-lg-4 rounded">
                            <div className="image" style={{ height: "100%" }}>
                                <img
                                    className="rounded-4"
                                    style={{
                                        alignSelf: "center",
                                        height: "100%",
                                        maxWidth: "100%",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundImage: "",
                                    }}
                                    src={`${
                                        poster_path
                                            ? `${
                                                  process.env.REACT_APP_IMAGE_URL.slice(
                                                      1,
                                                      -2
                                                  ) ||
                                                  process.env
                                                      .REACT_APP_IMAGE_URL
                                              }${poster_path || backdrop_path}`
                                            : `${backdrop_image}`
                                    }`}
                                    alt={`${title}`}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-8 col-lg-8 ">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div>
                                        <h3 className="card-title fw-bolder d-inline text-capitalize">
                                            {title}
                                        </h3>

                                        <h5
                                            className={`fs-6 mt-1 ${
                                                darkMode
                                                    ? "text-bg-dark"
                                                    : "text-muted"
                                            }`}
                                        >
                                            {release_date}
                                        </h5>
                                    </div>

                                    <div className=" fs-3">
                                        <AddWatchLater movie={movie} key={id} />
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <Stars
                                        className="d-inline "
                                        rating={vote_average / 2}
                                    />

                                    <div>
                                        <p className="d-inline ">
                                            {vote_count}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <p className="card-text p-1 fw-medium">
                                    {overview}
                                </p>
                            </div>

                            <div>
                                <div>
                                    {genres?.map((genre, index) => (
                                        <React.Fragment key={index}>
                                            <span className="badge badge-pill px-4 py-2 bg-warning text-dark me-2 mb-2 fw-normal rounded-5  text-capitalize">
                                                {genre.name}
                                            </span>
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <p
                                        className="d-inline"
                                        style={{ fontSize: "15px" }}
                                    >
                                        <span className="fw-bold px-2">
                                            Duration:
                                        </span>
                                        {(runtime / 60).toFixed(2)} h
                                    </p>

                                    <p
                                        className="d-inline px-4"
                                        style={{ fontSize: "15px" }}
                                    >
                                        <span className="fw-bold px-2 text-capitalize">
                                            Languages:
                                        </span>

                                        {spoken_languages?.map(
                                            (lang, index) => (
                                                <React.Fragment key={index}>
                                                    <span className="px-2">
                                                        {lang.name || "English"}
                                                    </span>
                                                </React.Fragment>
                                            )
                                        )}
                                    </p>
                                </div>

                                <div>
                                    <img
                                        style={{
                                            display: "block",
                                            width: "40%",
                                            height: "200px",
                                            padding: "30px 0px 30px 0px",
                                            objectFit: "fill",
                                        }}
                                        src={
                                            production_companies[0]?.logo_path
                                                ? `${
                                                      process.env.REACT_APP_IMAGE_URL.slice(
                                                          1,
                                                          -2
                                                      ) ||
                                                      process.env
                                                          .REACT_APP_IMAGE_URL
                                                  }${
                                                      production_companies[0]
                                                          ?.logo_path
                                                  }`
                                                : `${backdrop_image}`
                                        }
                                        alt={`${production_companies[0].name}`}
                                    />
                                </div>

                                <div>
                                    <a
                                        className={`text-decoration-none badge border border-warning rounded-5 px-3 py-2  ${
                                            darkMode
                                                ? "text-bg-dark"
                                                : "text-secondary"
                                        }`}
                                        href={homepage}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="me-2">Website</span>
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`Recommendations ${darkMode ? "text-bg-dark" : ""}`}
            >
                <div className="container py-5">
                    <div className="row">
                        <div className="title">
                            <h2 className="text-capitalize mb-4 fw-bold">
                                Recommendations
                            </h2>
                        </div>
                    </div>

                    <div>
                        {recommendMovie && recommendMovie?.length !== 0 ? (
                            <div className="row gy-5 gx-3 ">
                                {recommendMovie?.map((movie, index) => (
                                    <React.Fragment key={index}>
                                        <MovieCard movie={movie} />
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <NoRecommendation />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;
