import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FacilitiesList from "../ui/facilities/facilitiesList";
import { useDispatch, useSelector } from "react-redux";
import { getHotelById } from "../../store/hotels";
import { getRoomById } from "../../store/rooms";
import parseUrl from "parse-url";
import { getCurrentUser } from "../../store/users";
import { createBooking } from "../../store/booking";
import FormPayment from "../ui/formPayment";
import { createPayment } from "../../store/payment";

const RoomPage = ({ roomId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const url = `${window.location.origin}${location.pathname}${location.search}`;
    const { query: date } = parseUrl(url);

    const currentUser = useSelector(getCurrentUser());
    const room = useSelector(getRoomById(roomId));
    const [hotelId, setHotelId] = useState("");
    const hotel = useSelector(getHotelById(hotelId));

    useEffect(() => {
        if (room) {
            setHotelId(room.hotelId);
        }
    }, [room]);

    const handleSubmit = async (data) => {
        if (!currentUser) return navigate("/sign");
        if (data) {
            const payloadBooking = {
                roomId,
                ...date,
                guestFirstName: currentUser.firstname,
                guestLastName: currentUser.lastname,
                guestPhone: currentUser.phone,
                bookingStatus: 1,
            };
            const bookingId = dispatch(createBooking(payloadBooking));
            const payloadPayment = {
                bookingId: await Promise.resolve(bookingId),
                paymentAmount: room.price,
                paymentDate: Date.now(),
                paymentType: "Card",
                paymentStatus: true,
            };
            dispatch(createPayment({ payload: payloadPayment, navigate }));
        }
    };

    return hotel ? (
        <>
            <h3 className="mb-3">
                {`${hotel.name} ${hotel.star} `}
                <i className="bi bi-star-fill"></i>
            </h3>
            <h4 className="mb-3">
                {room.name}{" "}
                <span className="badge text-bg-success">
                    c {date.arrivalDate} по {date.departureDate}
                </span>
            </h4>
            <div className="row mt-3">
                <div className="col-md-6">
                    <div id={room.images[0]} className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={`/image/hotels/room/${room.images[0]}.webp`}
                                    className="d-block w-100"
                                    alt="Стандарт"
                                    style={{
                                        height: "233.47px",
                                    }}
                                />
                            </div>
                            {room.images.slice(1).map((image) => (
                                <div className="carousel-item" key={image}>
                                    <img
                                        src={`/image/hotels/room/${image}.webp`}
                                        className="d-block w-100"
                                        alt="Стандарт"
                                        style={{
                                            height: "233.47px",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#${room.images[0]}`}
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#${room.images[0]}`}
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <FacilitiesList facilities={room.facilities} />
                    </div>
                </div>
                <FormPayment onSubmit={handleSubmit} />
            </div>
        </>
    ) : (
        <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default RoomPage;
