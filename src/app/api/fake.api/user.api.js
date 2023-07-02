const users = [
    {
        _id: "1",
        firstname: "Админ",
        lastname: "Админский",
        role: "ADMIN",
        email: "admin@mail.ru",
        password: "Test1234",
        phone: "+375441234567",
        image: "https://avatars.dicebear.com/api/avataaars/mdqeq.svg",
    },
    {
        _id: "2",
        firstname: "Тест",
        lastname: "Тестовский",
        role: "USER",
        email: "test@mail.ru",
        password: "Test1234",
        phone: "+375447654321",
        image: "https://avatars.dicebear.com/api/avataaars/kxhav.svg",
    },
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

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
                ...payload,
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            resolve(newUser);
        }, 200);
    });

const get = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 200);
    });

const getUser = ({ email, password }) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (u) => u.email === email && u.password === password
                )
            );
        }, 200);
    });

const getUserById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (u) => u._id === id
                )
            );
        }, 200);
    });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    get,
    getUser,
    getUserById,
};
