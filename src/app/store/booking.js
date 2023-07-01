import { createAction, createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/bookingService";
import api from "../api";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        bookingReq: (state) => {
            state.isLoading = true;
        },
        bookingReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        bookingReqFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        bookingCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        bookingUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((b) => b._id === action.payload._id)
            ] = action.payload;
        },
        bookingRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (b) => b._id !== action.payload
            );
        },
    },
});

const { reducer: bookingReducer, actions } = bookingSlice;
const {
    bookingReq,
    bookingReceived,
    bookingReqFailed,
    bookingCreated,
    bookingUpdated,
    bookingRemoved,
} = actions;

const createBookingReq = createAction("booking/createBookingReq");
const updateBookingReq = createAction("booking/updateBookingReq");
const removeBookingReq = createAction("booking/removeBookingReq");

export const loadBookingList = () => async (dispatch) => {
    dispatch(bookingReq());
    try {
        const content = api.booking.get();
        console.log(content.length);
        // const { content } = await bookingService.get();
        dispatch(bookingReceived(content));
    } catch (error) {
        dispatch(bookingReqFailed(error.message));
    }
};

export const createBooking = (payload) => async (dispatch) => {
    dispatch(createBookingReq());
    try {
        const content = await api.booking.create(payload);
        // const { content } = await bookingService.create(payload);
        dispatch(bookingCreated(content));
    } catch (error) {
        dispatch(bookingReqFailed(error.message));
    }
};

export const updateBooking = (bookingId, payload) => async (dispatch) => {
    dispatch(updateBookingReq());
    try {
        const { content } = await bookingService.update(bookingId, payload);
        dispatch(bookingUpdated(content));
    } catch (error) {
        dispatch(bookingReqFailed(error.message));
    }
};

export const removeBooking = (bookingId) => async (dispatch) => {
    dispatch(removeBookingReq());
    try {
        const content = await api.booking.remove(bookingId);
        // const { content } = await bookingService.delete(bookingId);
        if (content === null) {
            dispatch(bookingRemoved(bookingId));
        }
    } catch (error) {
        dispatch(bookingReqFailed(error.message));
    }
};

export const getBooking = () => (state) => state.booking.entities;
export const getBookingLoadingStatus = () => (state) => state.booking.isLoading;

export default bookingReducer;
