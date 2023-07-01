import { createAction, createSlice } from "@reduxjs/toolkit";
import hotelService from "../services/hotelService";

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        hotelsReq: (state) => {
            state.isLoading = true;
        },
        hotelsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        hotelsReqFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        hotelCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        hotelUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((h) => h._id === action.payload._id)
            ] = action.payload;
        },
        hotelRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (h) => h._id !== action.payload
            );
        },
    },
});

const { reducer: hotelsReducer, actions } = hotelsSlice;
const {
    hotelsReq,
    hotelsReceived,
    hotelsReqFailed,
    hotelCreated,
    hotelUpdated,
    hotelRemoved,
} = actions;

const createHotelReq = createAction("hotels/createHotelReq");
const updateHotelReq = createAction("hotels/updateHotelReq");
const removeHotelReq = createAction("hotels/removeHotelReq");

export const loadHotelsList = () => async (dispatch) => {
    dispatch(hotelsReq());
    try {
        const { content } = await hotelService.fetchAll();
        dispatch(hotelsReceived(content));
    } catch (error) {
        dispatch(hotelsReqFailed(error.message));
    }
};

export const createHotel = (payload) => async (dispatch) => {
    dispatch(createHotelReq());
    try {
        const { content } = await hotelService.create(payload);
        dispatch(hotelCreated(content));
    } catch (error) {
        dispatch(hotelsReqFailed(error.message));
    }
};

export const updateHotel = (hotelId, payload) => async (dispatch) => {
    dispatch(updateHotelReq());
    try {
        const { content } = await hotelService.update(hotelId, payload);
        dispatch(hotelUpdated(content));
    } catch (error) {
        dispatch(hotelsReqFailed(error.message));
    }
};

export const removeHotel = (hotelId) => async (dispatch) => {
    dispatch(removeHotelReq());
    try {
        const { content } = await hotelService.delete(hotelId);
        if (content === null) {
            dispatch(hotelRemoved(hotelId));
        }
    } catch (error) {
        dispatch(hotelsReqFailed(error.message));
    }
};

export const getHotelById = (hotelId) => (state) => {
    if (state.hotels.entities) {
        return state.hotels.entities.find((h) => h._id === hotelId);
    }
};

export const getHotels = () => (state) => state.hotels.entities;
export const getHotelsLoadingStatus = () => (state) => state.hotels.isLoading;

export default hotelsReducer;
