import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RoomCard from "../ui/roomCard";
import Calendar from "../ui/calendar";
import { splitGetTime } from "../../utils/formatCalendarDate";
import { useHotel } from "../../hooks/useHotel";
import { useRoom } from "../../hooks/useRoom";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";

const HotelPage = () => {
    const { hotelId } = useParams();
    const { currentUser } = useAuth();
    const { roomAdd } = useUser();
    const { getRoom, bookingAdd } = useRoom();
    const hotel = useHotel().getHotel(Number(hotelId));
    const hotelRoms = hotel.rooms.map((room) => getRoom(room));
    const notBookingRooms = hotelRoms.filter((r) => r.booking !== true);
    const [filterRooms, setFilterRooms] = useState(notBookingRooms);
    const [date, setDate] = useState({});

    const handleClick = (roomId) => {
        const payload = {
            _id: roomId,
            userId: currentUser._id,
            ...date,
        };
        bookingAdd(payload);
        roomAdd(currentUser._id, roomId);
    };

    const handleSubmit = (data) => {
        const dayOfArrival = splitGetTime(data.dayOfArrival);

        const filtered = hotelRoms.filter(
            (room) => splitGetTime(room.dayOfDeparture) <= dayOfArrival
        );
        setFilterRooms(filtered);
        setDate({
            dayOfArrival: data.dayOfArrival,
            dayOfDeparture: data.dayOfDeparture,
        });
    };
    return (
        <>
            <h3 className="mb-3">
                {`${hotel.name} ${hotel.star} `}
                <i className="bi bi-star-fill"></i>
            </h3>
            <p className="text-start mb-1">
                <span className="badge text-bg-success text-light">
                    {hotel.rate}
                </span>
            </p>
            <p className="text-start mb-3">{hotel.address}</p>
            <div className="mt-3">
                <div className="row gx-5">
                    <div className="col mb-3">
                        <div className="ps-3">
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                width={600}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="pe-3">
                            <p>{hotel.description}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        {hotel.services.map((service) => (
                            <div className="p-3" key={service.label}>
                                <p>
                                    <i className={"bi bi-" + service.value}></i>
                                    {" " + service.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Calendar onSubmit={handleSubmit} />
            {filterRooms.map((room) => (
                <RoomCard room={room} key={room._id} onClick={handleClick} />
            ))}
        </>
    );
};

export default HotelPage;
