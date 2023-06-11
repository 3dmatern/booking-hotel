import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Home from "./layouts/home";
import Admin from "./layouts/admin";
import Hotel from "./layouts/hotel";
import Sign from "./layouts/sign";
import Booking from "./layouts/booking";
import { HotelsProvider } from "./hooks/useHotel";
import { RoomsProvider } from "./hooks/useRoom";
import { UserProvider } from "./hooks/useUser";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/useAuth";
import Logout from "./layouts/logout";

function App() {
    return (
        <div className="container-sm">
            <AuthProvider>
                <Navbar />
                <UserProvider>
                    <HotelsProvider>
                        <RoomsProvider>
                            <Routes>
                                <Route path="/*" element={<Home />} />
                                <Route path="/sign/:type?" element={<Sign />} />
                                <Route
                                    path="/hotel/:hotelId"
                                    element={<Hotel />}
                                />
                                <Route path="/booking" element={<Booking />} />
                                <Route path="/admin" element={<Admin />} />
                                <Route path="/logout" element={<Logout />} />
                            </Routes>
                        </RoomsProvider>
                    </HotelsProvider>
                </UserProvider>
            </AuthProvider>

            <ToastContainer />
        </div>
    );
}

export default App;
