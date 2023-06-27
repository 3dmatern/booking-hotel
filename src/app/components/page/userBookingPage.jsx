import React, { useEffect, useState } from "react";
import RoomCard from "../ui/roomCard";
import { useRoom } from "../../hooks/useRoom";
import { useUser } from "../../hooks/useUser";

const UserBookingPage = ({ currentUser }) => {
    const { roomClear } = useUser();
    const { getRoom, bookingRemove } = useRoom();
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        if (currentUser) {
            setRooms(currentUser.rooms);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser.rooms]);
    const handleClick = async (roomId, date) => {
        const { rooms } = await roomClear(currentUser._id, roomId, date);
        await bookingRemove(roomId, currentUser._id, date);
        setRooms(rooms);
    };

    return (
        <>
            {rooms.map((userRoom, index) => {
                const room = getRoom(userRoom.roomId);
                const { dayOfArrival, dayOfDeparture } = userRoom;
                return (
                    <RoomCard
                        date={{
                            dayOfArrival,
                            dayOfDeparture,
                        }}
                        room={room}
                        key={room._id + index}
                        close={true}
                        onClick={handleClick}
                    />
                );
            })}
        </>
    );
};

export default UserBookingPage;
