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
    {
        _id: "2",
        roomId: "1",
        arrivalDate: "2023-07-04",
        departureDate: "2023-07-06",
        guestFirstName: "Тест",
        guestLastName: "Тестовский",
        guestPhone: "+375447654321",
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

const update = (bookingId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const booking = JSON.parse(localStorage.getItem("booking"));
            const bookingIndex = booking.findIndex((b) => b._id === bookingId);
            booking[bookingIndex] = {
                ...booking[bookingIndex],
                bookingStatus: 0,
            };
            localStorage.setItem("booking", JSON.stringify(booking));
            resolve(null);
        }, 200);
    });

export default {
    create,
    get,
    update,
};
