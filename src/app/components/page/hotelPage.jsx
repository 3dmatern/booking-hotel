import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RoomCard from "../ui/roomCard";
import Calendar from "../ui/calendar";
import { useRoom } from "../../hooks/useRoom";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import { isRoomAvailable } from "../../utils/isRoomAvailable";
import FacilitiesList from "../ui/facilities/facilitiesList";
import { useSelector } from "react-redux";
import { getHotelById } from "../../store/hotels";

const HotelPage = () => {
    const { hotelId } = useParams();
    const { currentUser } = useAuth();
    const { roomAdd } = useUser();
    const { getRoom, bookingAdd } = useRoom();

    const hotel = useSelector(getHotelById(hotelId));
    const hotelRooms = hotel.rooms.map((room) => getRoom(room));
    const [filterRooms, setFilterRooms] = useState(hotelRooms);
    const [date, setDate] = useState({});

    const handleClick = async (roomId) => {
        const userId = currentUser._id;
        const payload = {
            userId,
            ...date,
        };
        const updateRooms = await bookingAdd(roomId, payload);
        await roomAdd(userId, { roomId, ...date });
        let filtered = [];
        for (let i = 0; i < updateRooms.length; i++) {
            if (updateRooms[i].day.length > 0) {
                const freeRoom = isRoomAvailable(
                    updateRooms[i].day,
                    date.dayOfArrival,
                    date.dayOfDeparture
                );
                if (!freeRoom) {
                    continue;
                } else {
                    filtered.push(updateRooms[i]);
                }
            } else {
                filtered.push(updateRooms[i]);
            }
        }

        return setFilterRooms(filtered);
    };

    const handleSubmit = (data) => {
        let filtered = [];
        for (let i = 0; i < hotelRooms.length; i++) {
            if (hotelRooms[i].day.length > 0) {
                const freeRoom = isRoomAvailable(
                    hotelRooms[i].day,
                    data.dayOfArrival,
                    data.dayOfDeparture
                );
                if (!freeRoom) {
                    continue;
                } else {
                    filtered.push(hotelRooms[i]);
                }
            } else {
                filtered.push(hotelRooms[i]);
            }
        }
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
                        <FacilitiesList facilities={hotel.services} />
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
