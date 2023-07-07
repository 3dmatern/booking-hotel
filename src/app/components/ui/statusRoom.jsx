import React, { useEffect, useState } from "react";
import Table from "../common/table/table";
import { useDispatch, useSelector } from "react-redux";
import {
    getBooking,
    getBookingLoadingStatus,
    removeBooking,
} from "../../store/booking";
import { getRooms, getRoomsLoadingStatus } from "../../store/rooms";
import { getHotels, getHotelsLoadingStatus } from "../../store/hotels";
import TextField from "../common/form/textField";

const StatusRoom = () => {
    const dispatch = useDispatch();
    const booking = useSelector(getBooking());
    const bookingLoadingStatus = useSelector(getBookingLoadingStatus());
    const rooms = useSelector(getRooms());
    const roomsLoadingStatus = useSelector(getRoomsLoadingStatus());
    const hotels = useSelector(getHotels());
    const hotelsLoadingStatus = useSelector(getHotelsLoadingStatus());
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const columns = {
        hotelName: "Название отеля",
        roomName: "Название номера",
        guestFirstName: "Имя гостя",
        guestLastName: "Фамилия гостя",
        guestPhone: "Номер телефона",
        arrivalDate: "Дата заселения",
        departureDate: "Дата выселения",
        bookingStatus: "Статус бронирования",
    };

    useEffect(() => {
        if (
            !bookingLoadingStatus &&
            !roomsLoadingStatus &&
            !hotelsLoadingStatus
        ) {
            let data = [];
            booking.map((item) => {
                if (item.bookingStatus === 0) return data;
                const { name: roomName, hotelId } = rooms.find(
                    (r) => r._id === item.roomId
                );
                const { name: hotelName } = hotels.find(
                    (h) => h._id === hotelId
                );
                data.push({ hotelName, roomName, ...item });
                return item;
            });
            setData(data);
            setFilterData(data);
        }
    }, [
        bookingLoadingStatus,
        roomsLoadingStatus,
        hotelsLoadingStatus,
        booking,
        rooms,
        hotels,
    ]);

    const handleClick = (bookingId) => {
        dispatch(removeBooking(bookingId));
    };

    const handleChange = (target) => {
        const result = data.filter((d) => d.guestPhone.includes(target.value));
        setFilterData(result);
    };

    return !bookingLoadingStatus ? (
        <div className="text-center">
            <TextField
                label="Поиск по номеру телефона гостя"
                name="guestPhone"
                placeholder="Введите номер в формате +375441234567"
                onChange={handleChange}
            />
            <Table columns={columns} data={filterData} onClick={handleClick} />
        </div>
    ) : (
        <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default StatusRoom;
