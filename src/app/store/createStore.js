import { combineReducers, configureStore } from "@reduxjs/toolkit";
import facilitiesReducer from "./facilities";
import hotelsReducer from "./hotels";
import roomsReducer from "./rooms";
import bookingReducer from "./booking";
import usersReducer from "./users";

const rootReducer = combineReducers({
    facilities: facilitiesReducer,
    users: usersReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
    booking: bookingReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
