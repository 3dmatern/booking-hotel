import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";
import localStorageService, {
    setTokens,
} from "../services/localStorageService";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const signUp = async (payload) => {
        try {
            const content = await api.users.create(payload);
            setTokens(content);
            getUserData();
            navigate(-1);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const signIn = async ({ email, password }) => {
        try {
            const content = await api.users.getUser(email, password);
            setTokens(content);
            getUserData();
            navigate(-1);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const logOut = () => {
        localStorageService.removeAuthData();
        setCurrentUser(null);
        navigate("/");
    };

    const getUserData = async () => {
        try {
            const userId = localStorageService.getUserId();
            const content = await api.users.getUserById(Number(userId));
            setCurrentUser(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (localStorageService.getUserId()) {
            getUserData();
        } else {
            setIsLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    return (
        <AuthContext.Provider value={{ signUp, currentUser, signIn, logOut }}>
            {!isLoading ? (
                children
            ) : (
                <div className="row justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </AuthContext.Provider>
    );
};
