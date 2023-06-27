import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import userService from "../services/userService";

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = async () => {
        try {
            const { content } = await userService.get();
            setUsers(content);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const getUser = (id) => {
        const content = users.find((u) => u._id === id);
        return content;
    };

    const roomAdd = async (userId, payload) => {
        try {
            const { rooms } = getUser(userId);
            rooms.push(payload);
            const { content } = await userService.update(userId, {
                rooms: rooms,
            });
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    };

    const roomClear = async (userId, roomId, date) => {
        try {
            const { rooms } = getUser(userId);
            const roomIndex = rooms.findIndex(
                (r) =>
                    r.roomId === roomId &&
                    r.dayOfArrival === date.dayOfArrival &&
                    r.dayOfDeparture === date.dayOfDeparture
            );
            rooms.splice(roomIndex, 1);
            const { content } = await userService.update(userId, {
                rooms,
            });
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    };

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setIsLoading(false);
    }

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users.length]);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <UserContext.Provider value={{ users, getUser, roomAdd, roomClear }}>
            {!isLoading ? (
                children
            ) : (
                <div className="row justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </UserContext.Provider>
    );
};
