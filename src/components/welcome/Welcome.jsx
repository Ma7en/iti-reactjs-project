import React, { useContext, useRef } from "react";

// bootstrap
import { Button } from "react-bootstrap";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Welcome({ query, setQuery }) {
    let refInput = useRef("");

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className={`welcome ${darkMode ? " text-bg-dark" : ""}`}>
                <div className="container py-3 ">
                    <div
                        className={`context p-5 rounded-3  ${
                            darkMode ? " text-bg-dark" : "bg-light"
                        }`}
                    >
                        <div className="title">
                            <h1 className="text-capitalize">
                                Welcome to our movie app
                            </h1>
                            <p className="text-secondary">
                                Millions of movies, TV shows and people to
                                discover. Explore now.
                            </p>
                        </div>

                        <div
                            className={`d-flex align-items-center justify-content-between gap-4 flex-sm-column flex-md-row`}
                        >
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Search and explore"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                                ref={refInput}
                            />

                            <Button
                                className="bg-warning"
                                variant="warning"
                                onClick={(e) => {
                                    setQuery(refInput.current.value);
                                }}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
