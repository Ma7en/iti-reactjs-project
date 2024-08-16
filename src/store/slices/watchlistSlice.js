import { createSlice } from "@reduxjs/toolkit";

const Initial_State = {
    watchlist: [],
};

const watchlistSlice = createSlice({
    name: "watchlistSlice",
    initialState: Initial_State,
    reducers: {
        setWatchlist: (state, action) => {
            state.watchlist = action.payload;
        },

        addTowatchlist: (state, action) => {
            state.watchlist.push(action.payload);
            console.log(`333`);
        },

        removeFromwatchlist: (state, action) => {
            state.watchlist.pop(state.watchlist.indexOf(action.payload));
            // console.log(`state`, state);
            // console.log(`action`, action);
            // state.watchlist = state.watchlist.filter(
            //     (watch) => watch.id !== action.payload
            // );
        },

        toggleWatchList: (state, action) => {
            // console.log(`action`, action.payload);
            const new_watchlist = action.payload;
            if (
                !state.watchlist.find((watch) => watch.id === new_watchlist.id)
            ) {
                state.watchlist.push(new_watchlist);
            } else {
                state.watchlist = state.watchlist.filter(
                    (watch) => watch.id !== new_watchlist.id
                );
            }
            // if (watchlist.includes(movie)) {
            //     dispatch(removeFromwatchlist(movie));
            //     console.log(`33333->`, "false");
            // } else {
            //     dispatch(addTowatchlist(movie));
            // }
        },

        clearwatchlist: (state, action) => {
            state.watchlist = [];
        },
    },
});

export const {
    addTowatchlist,
    removeFromwatchlist,
    clearwatchlist,
    toggleWatchList,
    setWatchlist,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
