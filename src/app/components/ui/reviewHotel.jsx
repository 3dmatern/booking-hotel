import { useSelector } from "react-redux";
import { getUserByPhone } from "../../store/users";
import { joinCurrentDate } from "../../utils/formatCalendarDate";

const ReviewHotel = ({
    _id,
    guestFirstName,
    guestLastName,
    guestPhone,
    review,
}) => {
    const user = useSelector(getUserByPhone(guestPhone));

    return (
        user && (
            <div className="bg-light card-body  mb-3">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-start ">
                            <img
                                src={user.image}
                                className="rounded-circle shadow-1-strong me-3"
                                alt="avatar"
                                width="65"
                                height="65"
                            />
                            <div className="flex-grow-1 flex-shrink-1">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1 ">
                                            {user &&
                                                guestFirstName +
                                                    " " +
                                                    guestLastName}{" "}
                                            <span className="small">
                                                - {joinCurrentDate()}
                                            </span>
                                        </p>
                                        {/* {currentUserId === userId && (
                                        <button
                                            className="btn btn-sm text-primary d-flex align-items-center"
                                            onClick={() => onRemove(id)}
                                        >
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    )} */}
                                    </div>
                                    <p className="small mb-0">{review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ReviewHotel;
