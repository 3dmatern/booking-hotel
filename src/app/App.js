import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/ui/navbar";
import Home from "./layouts/home";
import Admin from "./layouts/admin";
import Hotel from "./layouts/hotel";
import Sign from "./layouts/sign";
import Booking from "./layouts/booking";
import Logout from "./layouts/logout";
import AuthLoader from "./components/ui/hoc/authLoader";

function App() {
    return (
        <div className="container-sm">
            <AuthLoader>
                <Navbar />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/sign/:type?" element={<Sign />} />
                    <Route path="/hotel/:hotelId" element={<Hotel />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/admin/*" element={<Admin />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </AuthLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
