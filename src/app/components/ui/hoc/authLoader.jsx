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
import { getBooking, loadBookingList } from "../../../store/booking";
import { loadPaymentList } from "../../../store/payment";
import { createGuestBook, loadGuestBooksList } from "../../../store/guestBook";
import { getGuestBooks } from "../../../store/guestBook";
import { getRooms } from "../../../store/rooms";
import {
    joinCurrentDate,
    splitGetTime,
} from "../../../utils/formatCalendarDate";

const AuthLoader = ({ children }) => {
    const dispatch = useDispatch();
    const usersStatusLoading = useSelector(getUsersLoadingStatus());

    const bookings = useSelector(getBooking());
    const guestBooks = useSelector(getGuestBooks());
    const rooms = useSelector(getRooms());

    const setGuestInGuestBook = () => {
        if (bookings && guestBooks && rooms) {
            bookings.map((b) => {
                if (
                    b.departureDate <= joinCurrentDate() &&
                    b.bookingStatus === 1
                ) {
                    rooms.map((r) => {
                        if (r._id === b.roomId) {
                            const checkIndex = guestBooks.findIndex(
                                (g) =>
                                    g.roomId === b.roomId &&
                                    g.guestPhone === b.guestPhone
                            );
                            if (checkIndex === -1) {
                                dispatch(
                                    createGuestBook({
                                        hotelId: r.hotelId,
                                        roomId: b.roomId,
                                        guestFirstName: b.guestFirstName,
                                        guestLastName: b.guestLastName,
                                        guestPhone: b.guestPhone,
                                        visitDate: splitGetTime(
                                            b.departureDate
                                        ),
                                        review: "",
                                        rate: 0,
                                        reviewStatus: false,
                                    })
                                );
                            }
                        }
                        return r;
                    });
                }
                return b;
            });
        }
    };
    useEffect(() => {
        setGuestInGuestBook();
    }, [bookings]);

    useEffect(() => {
        dispatch(loadFacilitiesList());
        dispatch(loadHotelsList());
        dispatch(loadRoomsList());
        dispatch(loadBookingList());
        dispatch(loadPaymentList());
        dispatch(loadGuestBooksList());
        dispatch(loadUsersList());
    }, []);

    if (usersStatusLoading) return "Loading...";

    return children;
};

export default AuthLoader;
