import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// components
import Stars from "../movie/Stars";
import AddWatchLater from "../movie/AddWatchLater";

// assest
import backdrop_image from "../../assets/Images/error/no-image-available.jpg";

function WatchCard({ watch }) {
    const navigate = useNavigate();

    //
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const {
        id,
        title,
        poster_path,
        backdrop_path,
        release_date,
        vote_average,
        overview,
    } = watch;

    return (
        <>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="border p-3 rounded-5 shadow h-100">
                    <div className="row g-3">
                        <div className="col-12 col-md-4">
                            <img
                                src={
                                    poster_path
                                        ? `${
                                              process.env.REACT_APP_IMAGE_URL.slice(
                                                  1,
                                                  -2
                                              ) ||
                                              process.env.REACT_APP_IMAGE_URL
                                          }${poster_path || backdrop_path}`
                                        : `${backdrop_image}`
                                }
                                className="card-img-top col-4 mb-2 rounded-4"
                                alt={`${title}`}
                                role="button"
                                onClick={() => {
                                    navigate(`/movie/${id}`);
                                }}
                                style={{ maxHeight: "260px" }}
                            />
                        </div>

                        <div className="col-12 col-md-8 ">
                            <div className="card-body d-flex align-items-start justify-content-between">
                                <div>
                                    <h3
                                        className="card-title  fw-bolder"
                                        role="button"
                                        onClick={() => {
                                            navigate(`/movie/${id}`);
                                        }}
                                    >
                                        {title}
                                    </h3>

                                    <h5
                                        className={`fs-6 mt-2 ${
                                            darkMode
                                                ? "text-bg-dark"
                                                : "text-muted "
                                        }`}
                                    >
                                        {release_date}
                                    </h5>
                                </div>

                                <div>
                                    <AddWatchLater movie={watch} key={id} />
                                </div>
                            </div>

                            <div>
                                <Stars rating={vote_average / 2} />
                            </div>

                            <div>
                                <p
                                    className="card-text p-1"
                                    style={{
                                        maxHeight: "80px",
                                        overflow: "hidden",
                                    }}
                                >
                                    {overview}...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WatchCard;
