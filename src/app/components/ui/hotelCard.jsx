import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ id, name, star, rate, image, userBooking }) => {
    return (
        <div
            className="card shadow mx-auto p-0 position-relative"
            style={{ width: "18rem", height: "12rem" }}
        >
            {userBooking && (
                <div className="position-absolute top-0 start-100 translate-middle">
                    <button type="button" className="btn" aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="red"
                            className="bi bi-x-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                        </svg>
                    </button>
                </div>
            )}
            <img src={image} className="card-img-top h-100" alt={name} />
            <div className="card-img-overlay text-center">
                <p className="text-start mb-5">
                    <span className="badge text-bg-primary text-light">
                        {rate}
                    </span>
                </p>
                <Link
                    to={`/hotel/${id}`}
                    className="btn btn-primary btn-sm mt-5"
                >
                    {name + " " + star + " "}
                    <i className="bi bi-star-fill"></i>
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;
