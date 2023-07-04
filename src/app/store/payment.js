import { createAction, createSlice } from "@reduxjs/toolkit";

import api from "../api";
import paymentService from "../services/paymentService";

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        paymentReq: (state) => {
            state.isLoading = true;
        },
        paymentReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        paymentReqFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        paymentCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        paymentUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((b) => b._id === action.payload._id)
            ] = action.payload;
        },
    },
});

const { reducer: paymentReducer, actions } = paymentSlice;
const {
    paymentReq,
    paymentReceived,
    paymentReqFailed,
    paymentCreated,
    paymentUpdated,
} = actions;

const createPaymentReq = createAction("payment/createPaymentReq");
const updatePaymentReq = createAction("payment/updatePaymentReq");

export const loadPaymentList = () => async (dispatch) => {
    dispatch(paymentReq());
    try {
        const content = await api.payment.get();
        // const { content } = await paymentService.get();
        dispatch(paymentReceived(content));
    } catch (error) {
        dispatch(paymentReqFailed(error.message));
    }
};

export const createPayment = (payload) => async (dispatch) => {
    dispatch(createPaymentReq());
    try {
        const content = await api.payment.create(payload);
        // const { content } = await paymentService.create(payload);
        dispatch(paymentCreated(content));
    } catch (error) {
        dispatch(paymentReqFailed(error.message));
    }
};

export const updatePayment = (paymentId, payload) => async (dispatch) => {
    dispatch(updatePaymentReq());
    try {
        const { content } = await paymentService.update(paymentId, payload);
        dispatch(paymentUpdated(content));
    } catch (error) {
        dispatch(paymentReqFailed(error.message));
    }
};

export const getPayment = () => (state) => state.payment.entities;
export const getPaymentLoadingStatus = () => (state) => state.payment.isLoading;

export default paymentReducer;
