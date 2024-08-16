import { configureStore } from "@reduxjs/toolkit";
import watchlistSlice from "./slices/watchlistSlice";

export default configureStore({
    reducer: {
        watchlist: watchlistSlice,
    },
});
