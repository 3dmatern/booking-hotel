import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFacilitiesList } from "../../../store/facilities";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList,
} from "../../../store/users";
import { loadHotelsList } from "../../../store/hotels";
import { loadRoomsList } from "../../../store/rooms";
import { loadBookingList } from "../../../store/booking";
import { loadPaymentList } from "../../../store/payment";
import { loadGuestBooksList } from "../../../store/guestBook";

const AuthLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        dispatch(loadFacilitiesList());
        dispatch(loadHotelsList());
        dispatch(loadRoomsList());
        dispatch(loadBookingList());
        dispatch(loadPaymentList());
        dispatch(loadGuestBooksList());
        // Например если пользователь не авторизован, то не нужно подгружать определенные данные
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);

    if (usersStatusLoading) return "Loading...";

    return children;
};

export default AuthLoader;
