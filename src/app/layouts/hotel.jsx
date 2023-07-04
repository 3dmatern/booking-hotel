import React from "react";
import HotelPage from "../components/page/hotelPage";
import { useParams } from "react-router-dom";
import RoomPage from "../components/page/roomPage";

const Hotel = () => {
    const { roomId } = useParams();
    return roomId ? <RoomPage roomId={roomId} /> : <HotelPage />;
};

export default Hotel;
