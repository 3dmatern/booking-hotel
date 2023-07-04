const booking = [
    {
        _id: "1",
        roomId: "1",
        arrivalDate: "2023-07-02",
        departureDate: "2023-07-04",
        guestFirstName: "Admin",
        guestLastName: "Adminskiy",
        guestPhone: "+375441234567",
        bookingStatus: 1,
    },
];

if (!localStorage.getItem("booking")) {
    localStorage.setItem("booking", JSON.stringify(booking));
}

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const booking = JSON.parse(localStorage.getItem("booking"));
            const newBooking = {
                _id: String(booking.length + 1),
                ...payload,
            };
            booking.push(newBooking);
            localStorage.setItem("booking", JSON.stringify(booking));
            resolve(newBooking);
        }, 200);
    });

const get = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("booking")));
        }, 200);
    });

const remove = (bookingId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const booking = JSON.parse(localStorage.getItem("booking"));
            const newBooking = booking.filter((b) => b._id !== bookingId);
            localStorage.setItem("booking", JSON.stringify(newBooking));
            resolve(null);
        }, 200);
    });

export default {
    create,
    get,
    remove,
};
