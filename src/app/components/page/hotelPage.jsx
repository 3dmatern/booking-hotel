import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelRoomCard from "../ui/hotelRoomCard";
import Calendar from "../ui/calendar";
import { isRoomAvailable } from "../../utils/isRoomAvailable";
import FacilitiesList from "../ui/facilities/facilitiesList";
import { useSelector } from "react-redux";
import { getHotelById } from "../../store/hotels";
import { selectRoomsByHotelId } from "../../store/rooms";
import { getBooking } from "../../store/booking";

const HotelPage = () => {
    const { hotelId } = useParams();

    const rooms = useSelector((state) => selectRoomsByHotelId(state, hotelId));
    const hotel = useSelector(getHotelById(hotelId));
    const booking = useSelector(getBooking());

    const [filterRooms, setFilterRooms] = useState([]);
    const [date, setDate] = useState({});

    useEffect(() => {
        if (rooms && booking) {
            const filtered = rooms.filter(
                (room) =>
                    room &&
                    isRoomAvailable(
                        booking.filter((b) => b.roomId === room._id),
                        date.arrivalDate,
                        date.departureDate
                    )
            );
            setFilterRooms(filtered);
        }
    }, [date]);

    const handleChangeData = (data) => {
        setDate({
            arrivalDate: data.arrivalDate,
            departureDate: data.departureDate,
        });
    };

    return hotel ? (
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
                                src={`/image/hotels/${hotel.image}.webp`}
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
                        <FacilitiesList facilities={hotel.facilities} />
                    </div>
                </div>
            </div>
            <Calendar onSubmit={handleChangeData} />
            {filterRooms.map((room) => (
                <HotelRoomCard
                    key={room._id}
                    roomId={room._id}
                    dateParam={date}
                />
            ))}
        </>
    ) : (
        <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default HotelPage;
