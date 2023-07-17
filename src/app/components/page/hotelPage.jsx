import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelRoomCard from "../ui/hotelRoomCard";
import Calendar from "../ui/calendar";
import { isRoomAvailable } from "../../utils/isRoomAvailable";
import FacilitiesList from "../ui/facilities/facilitiesList";
import { useDispatch, useSelector } from "react-redux";
import { getHotelById } from "../../store/hotels";
import { selectRoomsByHotelId } from "../../store/rooms";
import { getBooking } from "../../store/booking";
import ReviewHotel from "../ui/reviewHotel";
import {
    selectGuestBooksByHotelId,
    updateGuestBook,
} from "../../store/guestBook";

const HotelPage = () => {
    const { hotelId } = useParams();
    const dispatch = useDispatch();

    const rooms = useSelector((state) => selectRoomsByHotelId(state, hotelId));
    const hotel = useSelector(getHotelById(hotelId));
    const booking = useSelector(getBooking());
    const reviews = useSelector((state) =>
        selectGuestBooksByHotelId(state, hotelId)
    );

    const [filterRooms, setFilterRooms] = useState([]);
    const [date, setDate] = useState({});
    const [error, setError] = useState(false);

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
    }, [date, booking]);

    const handleChangeData = (data) => {
        if (data.arrivalDate === data.departureDate) {
            setError(true);
            return;
        } else {
            setError(false);
            setDate({
                arrivalDate: data.arrivalDate,
                departureDate: data.departureDate,
            });
        }
    };

    const handleRemove = (id) => {
        const payload = {
            review: "",
            rate: 0,
            reviewStatus: false,
        };
        dispatch(updateGuestBook(id, payload));
    };

    return hotel && reviews ? (
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
            <Calendar onSubmit={handleChangeData} error={error} />
            {filterRooms.map((room) => (
                <HotelRoomCard
                    key={room._id}
                    roomId={room._id}
                    dateParam={date}
                    error={error}
                />
            ))}
            <p className="fw-bold fs-4">Отзывы</p>
            <div className="card">
                {reviews.map(
                    (r) =>
                        r.reviewStatus && (
                            <ReviewHotel
                                key={r._id}
                                {...r}
                                onRemove={handleRemove}
                            />
                        )
                )}
            </div>
        </>
    ) : (
        <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default HotelPage;
