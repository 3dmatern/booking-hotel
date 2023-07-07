const guestBooks = [
    {
        _id: "1",
        hotelId: "1",
        roomId: "1",
        guestFirstName: "Admin",
        guestLastName: "Adminskiy",
        guestPhone: "+375441234567",
        visitDate: 1688473570565,
        review: "Какой-то отзыв",
        rate: 5,
        reviewStatus: true,
        dateReview: 1688473570565,
    },
];

if (!localStorage.getItem("guestBooks")) {
    localStorage.setItem("guestBooks", JSON.stringify(guestBooks));
}

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const guestBooks = JSON.parse(localStorage.getItem("guestBooks"));
            const newGuestBook = {
                _id: String(guestBooks.length + 1),
                ...payload,
            };
            guestBooks.push(newGuestBook);
            localStorage.setItem("guestBooks", JSON.stringify(guestBooks));
            resolve(newGuestBook);
        }, 200);
    });

const get = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("guestBooks")));
        }, 200);
    });

const update = (id, data) =>
    new Promise((resolve) => {
        const guestBooks = JSON.parse(localStorage.getItem("guestBooks"));
        const guestIndex = guestBooks.findIndex((g) => g._id === id);
        guestBooks[guestIndex] = { ...guestBooks[guestIndex], ...data };
        localStorage.setItem("guestBooks", JSON.stringify(guestBooks));
        resolve(guestBooks[guestIndex]);
    });

const getByIdGuestBook = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("guestBooks")).find(
                    (g) => g._id === id
                )
            );
        }, 200);
    });

const removeGuestBook = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const guestBooks = JSON.parse(localStorage.getItem("guestBooks"));
            const newGuestBooks = guestBooks.filter((g) => g._id !== id);
            localStorage.setItem("guestBooks", JSON.stringify(newGuestBooks));
            resolve(null);
        }, 200);
    });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    get,
    getByIdGuestBook,
    update,
    removeGuestBook,
};
