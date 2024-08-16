import React from "react";
import { useContext } from "react";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// components
import WatchCard from "./WatchCard";
import { useSelector } from "react-redux";
import NoWatch from "./NoWatch";

function WatchList() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const watchListMovies = useSelector((state) => state.watchlist.watchlist);
    // console.log(`ffg.....>>`, watchListMovies);

    return (
        <>
            <div className="row mb-4">
                <div className="title">
                    <h2 className=" fw-bolder d-inline text-capitalize">
                        Watch list
                    </h2>
                </div>
            </div>

            {watchListMovies.length ? (
                <div className="row g-3">
                    {watchListMovies?.map((watch, index) => (
                        <React.Fragment key={index}>
                            <WatchCard watch={watch} />
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <>
                    <NoWatch />
                </>
            )}
        </>
    );
}

export default WatchList;
