import { combineReducers, configureStore } from "@reduxjs/toolkit";
import facilitiesReducer from "./facilities";
import hotelsReducer from "./hotels";

const rootReducer = combineReducers({
    facilities: facilitiesReducer,
    hotels: hotelsReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
