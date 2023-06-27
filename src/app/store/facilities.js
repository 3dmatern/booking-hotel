import { createSlice } from "@reduxjs/toolkit";
import facilitiService from "../services/facilitiService";

const facilitiesSlice = createSlice({
    name: "facilities",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        facilitiesReq: (state) => {
            state.isLoading = true;
        },
        facilitiesReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        facilitiesReqFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: facilitiesReducer, actions } = facilitiesSlice;
const { facilitiesReq, facilitiesReceived, facilitiesReqFailed } = actions;

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadFacilitiesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().facilities;
    if (isOutDated(lastFetch)) {
        dispatch(facilitiesReq());
        try {
            const { content } = await facilitiService.get();
            dispatch(facilitiesReceived(content));
        } catch (error) {
            dispatch(facilitiesReqFailed(error.message));
        }
    }
};

export const getFacilities = () => (state) => state.facilities.entities;
export const getFacilitiesLoadingStatus = () => (state) =>
    state.facilities.isLoading;
export const getFacitiliesByIds = (facilitiesIds) => (state) => {
    if (state.facilities.entities) {
        const facilitiesArray = [];
        for (const facilId of facilitiesIds) {
            for (const faciliti of state.facilities.entities) {
                if (faciliti._id === facilId._id) {
                    facilitiesArray.push(faciliti);
                    break;
                }
            }
        }
        return facilitiesArray;
    }
    return [];
};

export default facilitiesReducer;
