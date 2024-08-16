/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// components
import WatchList from "../../components/watchlist/WatchList";

function WatchListPage() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className={`watchlistpage ${darkMode ? "text-bg-dark" : ""}`}>
                <div className="container py-5" style={{ minHeight: "100vh" }}>
                    <WatchList />
                </div>
            </div>
        </>
    );
}

export default WatchListPage;
