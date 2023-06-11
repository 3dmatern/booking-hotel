import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const NavProfile = () => {
    const { currentUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.firstname}</div>
                <img
                    src={currentUser.image}
                    alt="avatar"
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                {currentUser.role === "ADMIN" && (
                    <Link to={"/admin"} className="dropdown-item">
                        Админка
                    </Link>
                )}
                <Link
                    to={`/currentUser/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Профиль
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Выход
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;