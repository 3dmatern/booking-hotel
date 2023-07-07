import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/users";
import { useEffect, useState } from "react";
import { getRooms } from "../../store/rooms";
import UserRoomCard from "../ui/userRoomCard";
import { getGuestBooks } from "../../store/guestBook";

const UserPage = () => {
    const currentUser = useSelector(getCurrentUser());
    const guestBooks = useSelector(getGuestBooks());
    const rooms = useSelector(getRooms());
    const [userInGuestBooks, setUserInBookingRooms] = useState([]);

    useEffect(() => {
        if (currentUser && guestBooks) {
            const check = guestBooks.filter(
                (g) => g.guestPhone === currentUser.phone
            );
            setUserInBookingRooms(check);
        }
    }, [guestBooks]);

    return (
        currentUser &&
        rooms && (
            <>
                <h1 className="mb-4 text-center">Профиль</h1>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="col-md-4 card border-primary text-center p-2">
                        <img
                            className="rounded-circle w-50 mx-auto mb-3"
                            src={currentUser.image}
                            alt="avatar"
                        />
                        <p className="badge bg-success mx-auto">
                            {currentUser.firstname + " " + currentUser.lastname}
                        </p>
                        <p className="fw-bold">
                            Email:{" "}
                            <span className="text-primary">
                                {currentUser.email}
                            </span>
                        </p>
                        <p className="fw-bold">
                            {" "}
                            Номер телефона:{" "}
                            <span className="text-primary">
                                {currentUser.phone}
                            </span>
                        </p>
                    </div>
                    <div className="col-md-8 card p-2">
                        {userInGuestBooks.map((guest) => (
                            <UserRoomCard key={guest._id} {...guest} />
                        ))}
                    </div>
                </div>
            </>
        )
    );
};

export default UserPage;
