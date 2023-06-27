import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useRoom } from "../../hooks/useRoom";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavbarAdmin from "../ui/navbarAdmin";
import StatusRoom from "../ui/statusRoom";
import FormCreateHotel from "../ui/formCreateHotel";
import FormCreateRoom from "../ui/formCreateRoom";
import { useSelector } from "react-redux";
import { getHotels } from "../../store/hotels";

const AdminStatusRoom = () => {
    const hotels = useSelector(getHotels());
    const modalId = nanoid();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { roomClear } = useUser();
    const { rooms, bookingRemove } = useRoom();
    const [currentRooms, setCurrentRooms] = useState(rooms);

    const removeBooking = async ({
        userId,
        roomId,
        dayOfArrival,
        dayOfDeparture,
    }) => {
        const updateRooms = await bookingRemove(roomId, userId, {
            dayOfArrival,
            dayOfDeparture,
        });
        roomClear(userId, roomId, { dayOfArrival, dayOfDeparture });
        setCurrentRooms(updateRooms);
    };

    useEffect(() => {
        if (!currentUser || currentUser.role !== "ADMIN") {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    useEffect(() => {
        setCurrentRooms(rooms);
    }, []);

    return (
        <>
            <h3 className="my-5">Панель администратора</h3>
            <NavbarAdmin />
            <Routes>
                <Route
                    index
                    element={
                        <StatusRoom
                            hotels={hotels}
                            currentRooms={currentRooms}
                            modalId={modalId}
                            removeBooking={removeBooking}
                        />
                    }
                />
                <Route
                    path="create-hotel"
                    element={<FormCreateHotel currentUser={currentUser} />}
                />
                <Route
                    path="create-room"
                    element={<FormCreateRoom currentUser={currentUser} />}
                />
            </Routes>
        </>
    );
};

export default AdminStatusRoom;
