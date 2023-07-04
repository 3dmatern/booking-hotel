import React, { useEffect, useState } from "react";
import HotelRoomCard from "../ui/hotelRoomCard";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/users";
import {
    getBooking,
    getBookingLoadingStatus,
    removeBooking,
} from "../../store/booking";

const UserBookingPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const booking = useSelector(getBooking());
    const bookingLoadingStatus = useSelector(getBookingLoadingStatus());
    const [userBooking, setUserBooking] = useState([]);

    useEffect(() => {
        if (currentUser && !bookingLoadingStatus) {
            const userBookingRoom =
                booking &&
                booking.filter((b) => b.guestPhone === currentUser.phone);
            setUserBooking(userBookingRoom);
        }
    }, [currentUser, bookingLoadingStatus, booking]);

    const handleClick = (bookingId) => {
        dispatch(removeBooking(bookingId));
    };

    return !bookingLoadingStatus ? (
        <>
            {userBooking &&
                userBooking.map((booking, index) => {
                    const { arrivalDate, departureDate } = booking;
                    return (
                        <HotelRoomCard
                            date={{
                                arrivalDate,
                                departureDate,
                            }}
                            bookingId={booking._id}
                            roomId={booking.roomId}
                            key={booking._id + index}
                            close={true}
                            onClick={handleClick}
                        />
                    );
                })}
        </>
    ) : (
        <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default UserBookingPage;
