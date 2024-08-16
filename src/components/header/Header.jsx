import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// bootstrap
import { Nav, Navbar } from "react-bootstrap";

// font awsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilm,
    faHeart,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Header() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const watchlist = useSelector((state) => state.watchlist.watchlist);

    return (
        <>
            <div
                className={`header  sticky-top  ${
                    darkMode ? " text-bg-dark" : "bg-body-tertiary"
                }`}
            >
                <Navbar
                    className={` d-flex justify-content-between align-items-center flex-column flex-md-row  gap-3 ps-5 pe-5   ${
                        darkMode ? "text-bg-dark" : "text-bg-warning"
                    }`}
                >
                    <NavLink
                        className="navbar-brand fs-4 d-flex align-items-center gap-2"
                        to="/home"
                    >
                        <FontAwesomeIcon
                            icon={faFilm}
                            className={`${darkMode ? "text-white" : ""}`}
                        />

                        <span
                            className={`d-inline-block fw-bold ${
                                darkMode ? "text-bg-dark" : ""
                            }`}
                        >
                            Movie App
                        </span>
                        {/* <span className="text-bg-secondary">mazen</span> */}
                    </NavLink>

                    <Nav className="d-flex align-items-center">
                        <NavLink className="nav-link pe-3 fw-bold">
                            {darkMode ? (
                                <FontAwesomeIcon
                                    icon={faSun}
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="text-white"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faMoon}
                                    onClick={() => setDarkMode(!darkMode)}
                                />
                            )}
                        </NavLink>

                        <NavLink
                            className="nav-link pe-3 fw-bold"
                            onClick={() =>
                                setLanguage(language === "EN" ? "AR" : "EN")
                            }
                        >
                            <span
                                className={`fw-bold text-uppercase ${
                                    darkMode ? "text-white" : ""
                                }`}
                            >
                                {language}
                            </span>
                        </NavLink>

                        <NavLink
                            className="nav-link fs-5 d-flex align-items-center gap-2 position-relative"
                            to="/watchlist"
                        >
                            <span
                                className={`fw-bold ${
                                    darkMode ? "text-white" : ""
                                }`}
                            >
                                Watchlist
                            </span>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={`${darkMode ? "text-white" : ""}`}
                            />

                            {watchlist?.length ? (
                                <>
                                    <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                                        {watchlist?.length}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
