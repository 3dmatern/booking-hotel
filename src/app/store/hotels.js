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
            state.entities.push(action.payload);
        },
        hotelUpdate: (state, action) => {
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
    hotelUpdate,
    hotelRemoved,
} = actions;

const addHotelReq = createAction("hotels/addHotelReq");
const updateHotelReq = createAction("hotels/updateHotelReq");
const updateHotelRoomsReq = createAction("hotels/updateHotelRoomsReq");
const removeHotelReq = createAction("hotel/removeHotelReq");

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
    dispatch(addHotelReq());
    try {
        const { content } = await hotelService.create(payload);
        dispatch(hotelCreated(content));
    } catch (error) {
        dispatch(hotelsReqFailed(error.message));
    }
};

export const updateHotel = (payload) => async (dispatch) => {
    dispatch(updateHotelReq());
    try {
        const { content } = await hotelService.update(payload);
        dispatch(hotelUpdate(content));
    } catch (error) {
        dispatch(hotelsReqFailed(error.message));
    }
};

export const updateHotelRooms =
    (hotelId, roomId) => async (dispatch, getState) => {
        const { entities } = getState().hotels;
        const indexHotel = entities.findIndex((h) => h._id === hotelId);
        dispatch(updateHotelRoomsReq());
        try {
            const { content } = await hotelService.update(hotelId, {
                rooms: [...entities[indexHotel].rooms, roomId],
            });
            dispatch(hotelUpdate(content));
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
