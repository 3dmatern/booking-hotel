import React from "react";
import Modal from "../common/modal";
import ModalContent from "./modalContent";

const StatusRoom = ({ hotels, currentRooms, modalId, removeBooking }) => {
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
                                            className="m-1 btn btn-success"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#${modalId}_${hotel._id}_${room.numberRoom}`}
                                        >
                                            {room.numberRoom}
                                        </button>
                                        <Modal
                                            id={`${modalId}_${hotel._id}_${room.numberRoom}`}
                                            name={`Отель: ${hotel.name}`}
                                            btnClose="Закрыть"
                                        >
                                            <ModalContent
                                                room={room}
                                                onClick={removeBooking}
                                            />
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
