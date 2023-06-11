import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Modal from "../common/modal";
import { useRoom } from "../../hooks/useRoom";
import { useHotel } from "../../hooks/useHotel";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
            <div className="text-center">
                <h2 className="mb-5">Статус номеров</h2>
                <div className="row row-cols-2 row-cols-lg-4 g-3 mx-auto">
                    {hotels.map((hotel) => (
                        <div className="col" key={hotel._id}>
                            <div className="p-1">
                                <p>
                                    Отель:
                                    <strong className="text-primary">
                                        {" " + hotel.name}
                                    </strong>
                                </p>
                                {currentRooms.map(
                                    (room) =>
                                        room.hotelId === hotel._id && (
                                            <span
                                                key={
                                                    hotel._id +
                                                    "_" +
                                                    room.numberRoom
                                                }
                                            >
                                                <button
                                                    type="button"
                                                    className={
                                                        "m-1 btn btn-" +
                                                        (room.booking
                                                            ? "danger"
                                                            : "success")
                                                    }
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#${modalId}_${hotel._id}_${room.numberRoom}`}
                                                >
                                                    {room.numberRoom}
                                                </button>
                                                <Modal
                                                    id={`${modalId}_${hotel._id}_${room.numberRoom}`}
                                                    name={`Отель: ${hotel.name}`}
                                                    btnClose="Закрыть"
                                                    btnApply="Снять бронь"
                                                    classNameBtn="danger"
                                                    onClick={() =>
                                                        removeBooking(
                                                            room.userId,
                                                            room._id
                                                        )
                                                    }
                                                >
                                                    <p>
                                                        Команта №
                                                        <strong className="text-primary">
                                                            {" " +
                                                                room.numberRoom}
                                                        </strong>
                                                    </p>
                                                    {getUser(room.userId) && (
                                                        <>
                                                            <p>
                                                                Забронировал:
                                                                <strong className="text-primary">
                                                                    {" " +
                                                                        getUser(
                                                                            room.userId
                                                                        )
                                                                            .firstname}
                                                                </strong>
                                                                <strong className="text-primary">
                                                                    {" " +
                                                                        getUser(
                                                                            room.userId
                                                                        )
                                                                            .lastname}
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                Email:
                                                                <strong className="text-primary">
                                                                    {" " +
                                                                        getUser(
                                                                            room.userId
                                                                        ).email}
                                                                </strong>
                                                            </p>
                                                        </>
                                                    )}
                                                </Modal>
                                            </span>
                                        )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminStatusRoom;
