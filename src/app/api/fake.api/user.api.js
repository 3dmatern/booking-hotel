const users = [
    {
        _id: 1,
        firstname: "Админ",
        lastname: "Админский",
        role: "ADMIN",
        email: "admin@mail.ru",
        password: "Test1234",
        image: "https://avatars.dicebear.com/api/avataaars/mdqeq.svg",
        rooms: [1, 10, 11],
    },
    {
        _id: 2,
        firstname: "Тест",
        lastname: "Тестовский",
        role: "USER",
        email: "test@mail.ru",
        password: "Test1234",
        image: "https://avatars.dicebear.com/api/avataaars/kxhav.svg",
        rooms: [2, 4, 9],
    },
];

// if (!localStorage.getItem("users")) {
//     localStorage.setItem("users", JSON.stringify(users));
// }

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const users = JSON.parse(localStorage.getItem("users"));
            const newUser = {
                _id: users.length + 1,
                role: "USER",
                image: `https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`,
                rooms: [],
                ...payload,
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            resolve(newUser);
        }, 1000);
    });

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 1000);
    });

const getUser = (email, password) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (u) => u.email === email && u.password === password
                )
            );
        }, 1000);
    });
const getUserById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (u) => u._id === id
                )
            );
        }, 1000);
    });

const addRoom = (userId, roomId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const users = JSON.parse(localStorage.getItem("users"));
            const userIndex = users.findIndex((user) => user._id === userId);
            users[userIndex].rooms.push(roomId);
            localStorage.setItem("users", JSON.stringify(users));
            resolve(users[userIndex]);
        }, 1000);
    });

const clearRoom = (userId, roomId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const users = JSON.parse(localStorage.getItem("users"));
            const userIndex = users.findIndex((u) => u._id === userId);
            users[userIndex].rooms = users[userIndex].rooms.filter(
                (r) => r !== roomId
            );
            localStorage.setItem("users", JSON.stringify(users));
            resolve(users[userIndex]);
        }, 1000);
    });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    fetchAll,
    getUser,
    getUserById,
    addRoom,
    clearRoom,
};
