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
    const handleClick = async (roomId) => {
        const { rooms } = await roomClear(currentUser._id, roomId);
        await bookingRemove(roomId);
        setRooms(rooms);
    };

    return (
        <>
            {rooms.map((userRoom) => {
                const room = getRoom(userRoom);
                return (
                    <RoomCard
                        room={room}
                        key={room._id}
                        close={true}
                        onClick={handleClick}
                    />
                );
            })}
        </>
    );
};

export default UserBookingPage;
