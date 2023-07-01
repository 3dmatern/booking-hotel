import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut(navigate));
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
