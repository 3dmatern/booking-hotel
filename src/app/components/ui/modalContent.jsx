import React from "react";
import { useUser } from "../../hooks/useUser";
import Button from "../common/button";

const ModalContent = ({ room, onClick }) => {
    const { getUser } = useUser();
    let users = room.day.map((d) => d).map((u) => getUser(u.userId));
    users = users.filter((user, index) => users.indexOf(user) === index);
    const handleClick = (payload) => {
        onClick(payload);
    };
    return (
        <>
            <p>
                Команта №
                <strong className="text-primary">
                    {" " + room.numberRoom}
                </strong>
            </p>
            {users.length > 0 &&
                users.map((u) => (
                    <div key={u._id + room.id}>
                        <p>
                            Забронировал:
                            <strong className="text-primary">
                                {" " + u.firstname}
                            </strong>
                            <strong className="text-primary">
                                {" " + u.lastname}
                            </strong>{" "}
                            Email:
                            <strong className="text-primary">
                                {" " + u.email}
                            </strong>
                        </p>
                        <ul className="list-group">
                            {u.rooms.map(
                                (r, index) =>
                                    r.roomId === room._id && (
                                        <li
                                            key={index}
                                            className="list-group-item"
                                        >
                                            <span>
                                                {`с ${r.dayOfArrival} по ${r.dayOfDeparture}`}{" "}
                                                <Button
                                                    type="button"
                                                    className="danger btn-sm"
                                                    name="Снять бронь"
                                                    onClick={() =>
                                                        handleClick({
                                                            userId: u._id,
                                                            roomId: r.roomId,
                                                            dayOfArrival:
                                                                r.dayOfArrival,
                                                            dayOfDeparture:
                                                                r.dayOfDeparture,
                                                        })
                                                    }
                                                />
                                            </span>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                ))}
        </>
    );
};

export default ModalContent;
