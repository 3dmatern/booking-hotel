import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import roomService from "../services/roomService";

const RoomsContext = React.createContext();

export const useRoom = () => {
    return useContext(RoomsContext);
};

export const RoomsProvider = ({ children }) => {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const create = async (payload) => {
        try {
            const { content } = await roomService.create(payload);
            navigate("/admin");
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    };

    const getRooms = async () => {
        try {
            const { content } = await roomService.fetchAll();
            setRooms(content);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const getRoom = (id) => {
        const content = rooms.find((r) => r._id === id);
        return content;
    };

    const bookingAdd = async (id, payload) => {
        try {
            const room = getRoom(id);
            room.day.push(payload);
            const { content } = await roomService.update(id, {
                day: room.day,
                booking: true,
            });
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    };

    const bookingRemove = async (id, userId, date) => {
        try {
            const room = getRoom(id);
            const dayIndex = room.day.findIndex(
                (d) =>
                    d.userId === userId &&
                    d.dayOfArrival === date.dayOfArrival &&
                    d.dayOfDeparture === date.dayOfDeparture
            );
            room.day.splice(dayIndex, 1);
            console.log(room.day);
            const { content } = await roomService.update(id, {
                day: room.day,
            });
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    };

    function errorCatcher(error) {
        setErrors(error);
        setIsLoading(false);
    }
    useEffect(() => {
        getRooms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rooms.length]);

    useEffect(() => {
        if (errors !== null) {
            toast(errors);
            setErrors(null);
        }
    }, [errors]);

    return (
        <RoomsContext.Provider
            value={{ rooms, create, getRoom, bookingRemove, bookingAdd }}
        >
            {!isLoading ? (
                children
            ) : (
                <div className="row justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </RoomsContext.Provider>
    );
};
