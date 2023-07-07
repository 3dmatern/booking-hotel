import React from "react";
import Button from "../common/button";
import FacilitiesList from "./facilities/facilitiesList";
import { useSelector } from "react-redux";
import { getRoomById, getRoomsLoadingStatus } from "../../store/rooms";
import { Link } from "react-router-dom";
import { splitGetTime } from "../../utils/formatCalendarDate";

const HotelRoomCard = ({
    date,
    dateParam,
    bookingId,
    roomId,
    close,
    onClick,
    error,
}) => {
    const room = useSelector(getRoomById(roomId));
    const roomsLoadingStatus = useSelector(getRoomsLoadingStatus());

    const amountDayPrice = (arrivalDate, departureDate, price) => {
        const amountDay =
            (splitGetTime(departureDate) - splitGetTime(arrivalDate)) /
            86400000;
        return (price / 2) * amountDay;
    };

    return !roomsLoadingStatus ? (
        <div className="card mb-3 mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
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
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">
                            {room.name}
                            {date && (
                                <span className="badge text-bg-success">
                                    c {date.arrivalDate} по {date.departureDate}
                                </span>
                            )}
                        </h3>
                        <p className="card-text mb-3">{room.info}</p>
                        <div className="d-flex justify-content-between">
                            {<FacilitiesList facilities={room.facilities} />}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <mark>{room.breakfest}</mark>
                            </div>
                            <div className="text-center">
                                <p className="p-0 m-0">
                                    <strong>
                                        {amountDayPrice(
                                            (dateParam || date).arrivalDate,
                                            (dateParam || date).departureDate,
                                            room.price
                                        )}
                                        ₽{" "}
                                    </strong>
                                </p>
                            </div>
                            {close ? (
                                <Button
                                    className="danger"
                                    name="Снять бронь"
                                    onClick={() => onClick(bookingId)}
                                />
                            ) : (
                                <Button
                                    className="btn btn-warning"
                                    type="button"
                                    name={
                                        <Link
                                            className="text-decoration-none text-body-secondary"
                                            to={`${room._id}?arrivalDate=${dateParam.arrivalDate}&departureDate=${dateParam.departureDate}`}
                                        >
                                            Выбрать
                                        </Link>
                                    }
                                    disabled={error}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default HotelRoomCard;
