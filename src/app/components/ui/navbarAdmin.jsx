import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <ul className="nav nav-tabs mb-5 justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/admin">
                    Статус номеров
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="create-hotel">
                    Добавить отель
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="create-room">
                    Добавить номер
                </Link>
            </li>
        </ul>
    );
};

export default NavbarAdmin;
