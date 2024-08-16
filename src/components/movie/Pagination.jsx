/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// context
import languageContext from "../../context/languageContext";
import themeContext from "../../context/themeContext";

// components
import MovieContext from "../../context/movieContext";

function Pagination() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const { page, setPage, maxpages } = useContext(MovieContext);

    const changePage = (p) => {
        if (p <= maxpages) {
            setPage(parseInt(p));
        }
    };

    return (
        <>
            <ul
                className={`pagination justify-content-center ${
                    darkMode ? "text-bg-dark" : ""
                }`}
            >
                <li className={`page-item ${page === 1 ? "disabled" : ""} `}>
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark" : ""
                        }`}
                        onClick={() => changePage(page - 1)}
                        role="button"
                        tabIndex="-1"
                        aria-disabled={page === 1 ? "true" : "false"}
                    >
                        <FontAwesomeIcon
                            icon={faAngleLeft}
                            className={`${darkMode ? "text-bg-dark" : ""}`}
                        />
                    </p>
                </li>

                <li className="page-item">
                    <p
                        className={`page-link ${
                            page === 1 ? "bg-warning text-light" : "text-dark"
                        } ${darkMode ? "text-bg-dark text-white" : ""}`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page <= 2 ? 1 : page - 2}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link ${
                            page === 2 ? "bg-warning text-light" : "text-dark"
                        } ${darkMode ? "text-bg-dark text-white" : ""}`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page <= 2 ? 2 : page - 1}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link ${
                            page >= 3 ? "bg-warning text-light" : "text-dark"
                        } ${darkMode ? "text-bg-dark text-white" : ""}`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page > 3 ? page : 3}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark text-white" : ""
                        }`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page > 3 ? page + 1 : 4}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark text-white" : ""
                        }`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page > 3 ? page + 2 : 5}
                    </p>
                </li>

                <li
                    className={`page-item ${
                        page === maxpages ? "disabled" : ""
                    }`}
                >
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark" : ""
                        }`}
                        onClick={() => changePage(page + 1)}
                        role="button"
                        tabIndex="-1"
                        aria-disabled={page === maxpages ? "true" : "false"}
                    >
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            className={`${darkMode ? "text-bg-dark" : ""}`}
                        />
                    </p>
                </li>
            </ul>
        </>
    );
}

export default Pagination;
