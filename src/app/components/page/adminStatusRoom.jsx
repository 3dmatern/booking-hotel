import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavbarAdmin from "../ui/navbarAdmin";
import StatusRoom from "../ui/statusRoom";
import FormCreateHotel from "../ui/formCreateHotel";
import FormCreateRoom from "../ui/formCreateRoom";
import { useSelector } from "react-redux";
import { getCurrentUser, getUsersLoadingStatus } from "../../store/users";

const AdminStatusRoom = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(getCurrentUser());
    const usersLoadingStatus = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        if (
            !usersLoadingStatus &&
            (!currentUser || currentUser.role !== "ADMIN")
        ) {
            navigate("/");
        }
    }, [usersLoadingStatus, currentUser]);

    return (
        <>
            <h3 className="my-5">Панель администратора</h3>
            <NavbarAdmin />
            <Routes>
                <Route index element={<StatusRoom />} />
                <Route
                    path="create-hotel"
                    element={<FormCreateHotel currentUser={currentUser} />}
                />
                <Route
                    path="create-room"
                    element={<FormCreateRoom currentUser={currentUser} />}
                />
            </Routes>
        </>
    );
};

export default AdminStatusRoom;
