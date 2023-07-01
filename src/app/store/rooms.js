import { createAction, createSlice } from "@reduxjs/toolkit";
import roomService from "../services/roomService";
import api from "../api";

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        roomsReq: (state) => {
            state.isLoading = true;
        },
        roomsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        roomsReqFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        roomCreate: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        roomUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((r) => r._id === action.payload._id)
            ] = action.payload;
        },
        roomRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (r) => r._id !== action.payload
            );
        },
    },
});

const { reducer: roomsReducer, actions } = roomsSlice;
const {
    roomsReq,
    roomsReceived,
    roomsReqFailed,
    roomCreate,
    roomUpdated,
    roomRemoved,
} = actions;

const createRoomReq = createAction("rooms/createRoomReq");
const updateRoomReq = createAction("rooms/updateRoomReq");
const removeRoomReq = createAction("rooms/removeRoomReq");

export const loadRoomsList = () => async (dispatch) => {
    dispatch(roomsReq());
    try {
        const content = await api.rooms.get();
        // const { content } = await roomService.fetchAll();
        dispatch(roomsReceived(content));
    } catch (error) {
        dispatch(roomsReqFailed(error.message));
    }
};

export const createRoom =
    ({ formData, navigate }) =>
    async (dispatch) => {
        dispatch(createRoomReq());
        try {
            const content = await api.rooms.create(formData);
            // const { content } = await roomService.create(payload);
            dispatch(roomCreate(content));
            navigate("/admin");
        } catch (error) {
            dispatch(roomsReqFailed(error.message));
        }
    };

export const updateRoom = (roomId, payload) => async (dispatch) => {
    dispatch(updateRoomReq());
    try {
        const { content } = await roomService.update(roomId, payload);
        dispatch(roomUpdated(content));
    } catch (error) {
        dispatch(roomsReqFailed(error.message));
    }
};

export const removeRoom = (roomId) => async (dispatch) => {
    dispatch(removeRoomReq());
    try {
        const { content } = await roomService.delete(roomId);
        if (content === null) {
            dispatch(roomRemoved(roomId));
        }
    } catch (error) {
        dispatch(roomsReqFailed(error.message));
    }
};

export const getRoomCurrentHotel = (hotelId) => (state) => {
    return state.rooms.entities
        ? state.rooms.entities.filter((r) => r.hotelId === hotelId)
        : null;
};
export const getRoomById = (roomId) => (state) => {
    if (state.rooms.entities) {
        return state.rooms.entities.find((r) => r._id === roomId);
    }
};
export const getRooms = () => (state) => state.rooms.entities;
export const getRoomsLoadingStatus = () => (state) => state.rooms.isLoading;

export default roomsReducer;
