import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// conponents
import Rating from "./Rating";
import AddWatchLater from "./AddWatchLater";

// assest
import backdrop_image from "../../assets/Images/error/no-image-available.jpg";

function MovieCard({ movie }) {
    const navigate = useNavigate();
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const {
        id,
        title,
        release_date,
        vote_average,
        poster_path,
        backdrop_path,
    } = movie;

    // console.log(`eee`, parseInt(vote_average));
    // console.log(`333>>`, release_date);

    return (
        <>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div
                    className={`card mb-2 border-0 shadow flex-fill h-100 ${
                        darkMode ? "text-bg-dark" : ""
                    }`}
                >
                    <img
                        onClick={() => navigate(`/movie/${id}`)}
                        role="button"
                        src={
                            poster_path
                                ? `${
                                      process.env.REACT_APP_IMAGE_URL.slice(
                                          1,
                                          -2
                                      ) || process.env.REACT_APP_IMAGE_URL
                                  }${poster_path || backdrop_path}`
                                : `${backdrop_image}`
                        }
                        className={`card-img-top img-fluid rounded-3 ${
                            darkMode ? "text-bg-dark" : ""
                        }`}
                        alt={`${title}`}
                    />

                    <div
                        className={`card-body p-1 px-2 position-relative rounded mt-1 d-flex align-items-center justify-content-between ${
                            darkMode ? "text-bg-dark" : ""
                        }`}
                    >
                        <div className="mt-3">
                            <h5
                                onClick={() => navigate(`/movie/${id}`)}
                                role="button"
                                className="d-inline-block card-title mb-0 text-wrap"
                            >
                                {title}
                            </h5>

                            <p className=" m-0 text-secondary p-0">
                                {release_date}
                            </p>
                        </div>

                        <Rating rate={parseInt(vote_average)} />

                        <div className="mt-3">
                            <AddWatchLater movie={movie} key={id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
