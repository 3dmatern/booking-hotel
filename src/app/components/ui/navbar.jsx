import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NavProfile from "./navProfile";

const Navbar = () => {
    const { currentUser } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand ps-2" to="/">
                    <img src="/image/logo.png" width={80} alt="Booking-Hotel" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-5" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Главная
                            </Link>
                        </li>
                        {currentUser && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/booking">
                                    Забронированные
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    {currentUser ? (
                        <div className="d-flex">
                            <NavProfile />
                        </div>
                    ) : (
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link
                                    className="nav-link px-1"
                                    aria-current="page"
                                    to="/sign"
                                >
                                    Вход /
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link ps-0"
                                    to="/sign/register"
                                >
                                    Зарегистрироваться
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
