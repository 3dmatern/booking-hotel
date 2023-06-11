import React, { useEffect } from "react";
import UserBookingPage from "../components/page/userBookingPage";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);
    return <UserBookingPage currentUser={currentUser} />;
};

export default Booking;
