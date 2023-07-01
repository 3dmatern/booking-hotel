const booking = [];

if (!localStorage.getItem("booking")) {
    localStorage.setItem("booking", JSON.stringify(booking));
}

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const booking = JSON.parse(localStorage.getItem("booking"));
            const newBooking = {
                _id: booking.length + 1,
                ...payload,
            };
            booking.push(newBooking);
            localStorage.setItem("booking", JSON.stringify(booking));
            resolve(newBooking);
        }, 1000);
    });

const get = () => {
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("booking")));
        }, 1000);
    });
};

const remove = (bookingId) => {
    new Promise((resolve) => {
        const booking = JSON.parse(localStorage.getItem("booking"));
        const updateBooking = booking.filter((b) => b._id !== bookingId);
        JSON.stringify("booking", updateBooking);
        resolve(null);
    });
};

export default {
    create,
    get,
    remove,
};
