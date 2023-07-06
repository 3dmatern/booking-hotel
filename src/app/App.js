import React from "react";
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
import Payment from "./layouts/payment";
import User from "./layouts/user";

function App() {
    return (
        <div className="container-sm">
            <AuthLoader>
                <Navbar />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/sign/:type?" element={<Sign />} />
                    <Route
                        path="/hotel/:hotelId/:roomId?"
                        element={<Hotel />}
                    />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/payment/:roomId" element={<Payment />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/admin/*" element={<Admin />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </AuthLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
