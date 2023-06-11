import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

const RoomsContext = React.createContext();

export const useRoom = () => {
    return useContext(RoomsContext);
};

export const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getRooms = async () => {
        try {
            const content = await api.rooms.fetchAll();
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

    const bookingAdd = async (payload) => {
        try {
            await api.rooms.bookingAdd(payload);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const bookingRemove = async (id) => {
        try {
            const content = await api.rooms.bookingRemove(id);
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
            value={{ rooms, getRoom, bookingRemove, bookingAdd }}
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
