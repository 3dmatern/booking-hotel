import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

const HotelsContext = React.createContext();

export const useHotel = () => {
    return useContext(HotelsContext);
};

export const HotelsProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getHotels = async () => {
        try {
            const content = await api.hotels.fetchAll();
            setHotels(content);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const getHotel = (id) => {
        const content = hotels.find((h) => h._id === id);
        return content;
    };

    function errorCatcher(error) {
        setErrors(error);
        setIsLoading(false);
    }
    useEffect(() => {
        getHotels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hotels.length]);

    useEffect(() => {
        if (errors !== null) {
            toast(errors);
            setErrors(null);
        }
    }, [errors]);

    return (
        <HotelsContext.Provider value={{ hotels, getHotel }}>
            {!isLoading ? (
                children
            ) : (
                <div className="row justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </HotelsContext.Provider>
    );
};
