import { useState } from "react";
import TextAreaField from "../common/form/textAreaField";
import Button from "../common/button";
import StarRating from "../common/starRating";
import { useDispatch, useSelector } from "react-redux";
import { getHotelById } from "../../store/hotels";
import { getRoomById } from "../../store/rooms";
import { joinDate } from "../../utils/formatCalendarDate";
import { updateGuestBook } from "../../store/guestBook";

const UserRoomCard = ({ _id, hotelId, roomId, visitDate, review, rate }) => {
    const dispatch = useDispatch();
    const { name: hotelName } = useSelector(getHotelById(hotelId));
    const { name: roomName } = useSelector(getRoomById(roomId));
    const dateVisit = joinDate(visitDate);

    const [data, setData] = useState({
        review: "",
        rate: 0,
        reviewStatus: true,
        dateReview: Date.now(),
    });

    const handleClick = (rate) => {
        setData((prevState) => ({
            ...prevState,
            ...rate,
        }));
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateGuestBook(_id, data));
    };

    return (
        <div className="card p-3">
            <div className="d-flex flex-wrap justify-content-around align-items-center">
                <h6 className="mb-1 fw-bold">{hotelName + " | " + roomName}</h6>
                <span className="badge bg-secondary fs-6">{dateVisit}</span>
            </div>
            <hr />
            <div>
                {review === "" && rate === 0 ? (
                    <form onSubmit={handleSubmit}>
                        <TextAreaField
                            label="Остваить отзыв"
                            name="review"
                            value={data.review}
                            onChange={handleChange}
                        />
                        <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <StarRating onClick={handleClick} />
                            <Button className="success" name="Оставить отзыв" />
                        </div>
                    </form>
                ) : (
                    <>
                        <p>
                            Отзыв: <span>{review}</span>
                        </p>
                        <p>
                            Рейтинг:{" "}
                            <span className="badge bg-success">{rate}</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserRoomCard;
