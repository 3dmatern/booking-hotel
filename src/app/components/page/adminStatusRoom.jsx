import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useRoom } from "../../hooks/useRoom";
import { useHotel } from "../../hooks/useHotel";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavbarAdmin from "../ui/navbarAdmin";
import StatusRoom from "../ui/statusRoom";
import FormCreateHotel from "../ui/formCreateHotel";
import FormCreateRoom from "../ui/formCreateRoom";

const AdminStatusRoom = () => {
    const modalId = nanoid();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { getUser, roomClear } = useUser();
    const { hotels } = useHotel();
    const { rooms, bookingRemove } = useRoom();
    const [currentRooms, setCurrentRooms] = useState(rooms);

    const removeBooking = async (userId, roomId) => {
        const newRooms = await bookingRemove(roomId);
        roomClear(userId, roomId);
        setCurrentRooms(newRooms);
    };

    useEffect(() => {
        if (!currentUser || currentUser.role !== "ADMIN") {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

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
                            getUser={getUser}
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
