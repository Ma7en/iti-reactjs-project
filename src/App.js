/* eslint-disable react/jsx-no-undef */
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { useState } from "react";
import { Provider } from "react-redux";

// store
import store from "./store/store";

// context
import themeContext from "./context/themeContext";
import languageContext from "./context/languageContext";

// route
import AppRoute from "./routes/Router";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            <Provider store={store}>
                <themeContext.Provider value={{ darkMode, setDarkMode }}>
                    <languageContext.Provider value={{ language, setLanguage }}>
                        <AppRoute />
                    </languageContext.Provider>
                </themeContext.Provider>
            </Provider>
        </>
    );
}

export default App;
