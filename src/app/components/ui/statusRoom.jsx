import React from "react";
import Modal from "../common/modal";

const StatusRoom = ({
    hotels,
    currentRooms,
    modalId,
    removeBooking,
    getUser,
}) => {
    return (
        <div className="row row-cols-2 row-cols-lg-4 g-3 mx-auto text-center">
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
                                        key={hotel._id + "_" + room.numberRoom}
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
                                                    {" " + room.numberRoom}
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
                                                                ).firstname}
                                                        </strong>
                                                        <strong className="text-primary">
                                                            {" " +
                                                                getUser(
                                                                    room.userId
                                                                ).lastname}
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
    );
};

export default StatusRoom;
