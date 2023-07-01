export const faciliti = [
    {
        _id: "6499a3cde0af63f1d5d292aa",
        value: "wifi",
        label: "Бесплатный Wi‑Fi",
    },
    {
        _id: "6499a3cde0af63f1d5d292ab",
        value: "p-square-fill",
        label: "Парковка",
    },
    {
        _id: "6499a3cde0af63f1d5d292ae",
        value: "fan",
        label: "Кондиционер в номере",
    },
    {
        _id: "6499a3cde0af63f1d5d292ac",
        value: "credit-card-2-back-fill",
        label: "Оплата картой",
    },
    {
        _id: "6499a3cde0af63f1d5d292ad",
        value: "battery-charging",
        label: "Тренажерный зал",
    },
    { _id: "6499a3cde0af63f1d5d292af", value: "water", label: "Бассейн" },
    {
        _id: "6499a3cde0af63f1d5d292b0",
        value: "droplet-half",
        label: "Ванна или душ",
    },
    { _id: "6499a3cde0af63f1d5d292b1", value: "snow3", label: "Холодильник" },
];

if (!localStorage.getItem("faciliti")) {
    localStorage.setItem("faciliti", JSON.stringify(faciliti));
}

const get = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("faciliti")));
        }, 1000);
    });

export default { get };
