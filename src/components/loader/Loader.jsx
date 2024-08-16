import React, { useContext } from "react";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Loader() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    // background: { darkMode ? "text-bg-dark" : ""},
                    zIndex: "10000",
                }}
                className={`d-flex align-items-center justify-content-center ${
                    darkMode ? "text-bg-dark" : "text-bg-light"
                }`}
            >
                <div className="d-flex gap-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    <h4>Loading ...</h4>
                </div>
            </div>
        </>
    );
}
export default Loader;
