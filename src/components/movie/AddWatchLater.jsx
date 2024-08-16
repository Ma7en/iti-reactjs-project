import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as Heart } from "@fortawesome/free-regular-svg-icons";

// store
import { toggleWatchList } from "../../store/slices/watchlistSlice";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function AddWatchLater({ movie }) {
    const dispatch = useDispatch();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [selected, setSelected] = useState(false);

    const { watchlist } = useSelector((state) => state.watchlist);
    // console.log(`watchlist`, watchlist);

    useEffect(() => {
        setSelected(watchlist.includes(movie));
    }, [movie, watchlist]);

    return (
        <>
            <FontAwesomeIcon
                className={` fs-3 ${
                    selected
                        ? "text-warning"
                        : darkMode
                        ? "text-white"
                        : "text-black-50"
                } `}
                style={{ right: "10px", top: "15px" }}
                role="button"
                onClick={() => dispatch(toggleWatchList(movie))}
                icon={selected ? faHeart : Heart}
            />
        </>
    );
}

export default AddWatchLater;
