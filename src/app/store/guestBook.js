import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import guestBookService from "../services/guestBookService";
import api from "../api";

const guestBooksSlice = createSlice({
    name: "guestBooks",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        guestBooksReq: (state) => {
            state.isLoading = true;
        },
        guestBooksReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        guestBooksReqFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        guestBookCreate: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        guestBookUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((r) => r._id === action.payload._id)
            ] = action.payload;
        },
        guestBookRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (r) => r._id !== action.payload
            );
        },
    },
});

const { reducer: guestBooksReducer, actions } = guestBooksSlice;
const {
    guestBooksReq,
    guestBooksReceived,
    guestBooksReqFailed,
    guestBookCreate,
    guestBookUpdated,
    guestBookRemoved,
} = actions;

const createGuestBookReq = createAction("guestBooks/createGuestBookReq");
const updateGuestBookReq = createAction("guestBooks/updateGuestBookReq");
const removeGuestBookReq = createAction("guestBooks/removeGuestBookReq");

export const loadGuestBooksList = () => async (dispatch) => {
    dispatch(guestBooksReq());
    try {
        const content = await api.guestBook.get();
        // const { content } = await guestBookService.fetchAll();
        dispatch(guestBooksReceived(content));
    } catch (error) {
        dispatch(guestBooksReqFailed(error.message));
    }
};

export const createGuestBook = (payload) => async (dispatch) => {
    dispatch(createGuestBookReq());
    try {
        const content = await api.guestBook.create(payload);
        // const { content } = await guestBookService.create(payload);
        dispatch(guestBookCreate(content));
    } catch (error) {
        dispatch(guestBooksReqFailed(error.message));
    }
};

export const updateGuestBook = (guestBookId, payload) => async (dispatch) => {
    dispatch(updateGuestBookReq());
    try {
        const content = await api.guestBook.update(guestBookId, payload);
        // const { content } = await guestBookService.update(guestBookId, payload);
        dispatch(guestBookUpdated(content));
    } catch (error) {
        dispatch(guestBooksReqFailed(error.message));
    }
};

export const removeGuestBook = (guestBookId) => async (dispatch) => {
    dispatch(removeGuestBookReq());
    try {
        const content = await api.guestBook.removeGuestBook(guestBookId);
        // const { content } = await guestBookService.delete(guestBookId);
        if (content === null) {
            dispatch(guestBookRemoved(guestBookId));
        }
    } catch (error) {
        dispatch(guestBooksReqFailed(error.message));
    }
};

export const getGuestBookById = (guestBookId) => (state) => {
    if (state.guestBooks.entities) {
        return state.guestBooks.entities.find((r) => r._id === guestBookId);
    }
};
export const getGuestBooks = () => (state) => state.guestBook.entities;
export const getGuestBooksLoadingStatus = () => (state) =>
    state.guestBooks.isLoading;

// Меморизация
export const selectGuestBooks = (state) => state.guestBook.entities;
export const selectGuestBooksByHotelId = createSelector(
    [selectGuestBooks, (state, hotelId) => hotelId],
    (guestBooks, hotelId) => {
        if (guestBooks) {
            return guestBooks.filter((r) => r.hotelId === hotelId);
        }
    }
);

export default guestBooksReducer;
