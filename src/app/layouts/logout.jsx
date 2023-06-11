import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Logout = () => {
    const { logOut } = useAuth();
    useEffect(() => {
        logOut();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="row justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Logout;
