import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/ui/navbar";
import Home from "./layouts/home";
import Admin from "./layouts/admin";
import Hotel from "./layouts/hotel";
import Sign from "./layouts/sign";
import Booking from "./layouts/booking";
import { RoomsProvider } from "./hooks/useRoom";
import { UserProvider } from "./hooks/useUser";
import { AuthProvider } from "./hooks/useAuth";
import Logout from "./layouts/logout";
import { useDispatch } from "react-redux";
import { loadFacilitiesList } from "./store/facilities";
import { loadHotelsList } from "./store/hotels";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadFacilitiesList());
        dispatch(loadHotelsList());
    }, []);
    return (
        <div className="container-sm">
            <AuthProvider>
                <Navbar />
                <UserProvider>
                    <RoomsProvider>
                        <Routes>
                            <Route path="/*" element={<Home />} />
                            <Route path="/sign/:type?" element={<Sign />} />
                            <Route path="/hotel/:hotelId" element={<Hotel />} />
                            <Route path="/booking" element={<Booking />} />
                            <Route path="/admin/*" element={<Admin />} />
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </RoomsProvider>
                </UserProvider>
            </AuthProvider>

            <ToastContainer />
        </div>
    );
}

export default App;
