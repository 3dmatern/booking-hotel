import { faciliti } from "./faciliti.api";

const rooms = [
    // {
    //     _id: 1,
    //     hotelId: 1,
    //     userId: 1,
    //     numberRoom: 1,
    //     name: "Стандарт c двумя кроватями",
    //     info: "2 односпальные кровати • 22 м.кв.",
    //     images: ["1_1", "1_2", "1_3"],
    //     faciliti: [faciliti.wi_fi, faciliti.fridge, faciliti.shower],
    //     price: 6000,
    //     breakfest: "Без питания",
    //     booking: true,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 2,
    //     hotelId: 2,
    //     userId: 2,
    //     numberRoom: 1,
    //     name: "Стандарт плюс двухместный с широкой кроватью",
    //     info: "1 двуспальная кровать • 21 м.кв.",
    //     images: ["2_1", "2_2", "2_3"],
    //     faciliti: [
    //         faciliti.wi_fi,
    //         faciliti.fridge,
    //         faciliti.conditioner,
    //         faciliti.shower,
    //     ],
    //     price: 6360,
    //     breakfest: "Без питания",
    //     booking: true,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 3,
    //     hotelId: 3,
    //     userId: null,
    //     numberRoom: 1,
    //     name: "Полулюкс -номер-студио",
    //     info: "1 двуспальная кровать или 2 односпальные кровати • 38 м.кв.",
    //     images: ["3_1", "3_2", "3_3"],
    //     faciliti: [
    //         faciliti.wi_fi,
    //         faciliti.fridge,
    //         faciliti.conditioner,
    //         faciliti.shower,
    //     ],
    //     price: 16320,
    //     breakfest: "Завтрак включён",
    //     booking: false,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 4,
    //     hotelId: 4,
    //     userId: 2,
    //     numberRoom: 1,
    //     name: "Делюкс, с двумя раздельными кроватями",
    //     info: "2 двуспальные кровати • 31 м.кв.",
    //     images: ["4_1", "4_2", "4_3"],
    //     faciliti: [faciliti.wi_fi, faciliti.conditioner, faciliti.shower],
    //     price: 17000,
    //     breakfest: "Завтрак включён",
    //     booking: true,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 5,
    //     hotelId: 5,
    //     userId: null,
    //     numberRoom: 1,
    //     name: "Бизнес класс премиум",
    //     info: "Двухместный с широкой кроватью • 21 м.кв.",
    //     images: ["5_1", "5_2", "5_3"],
    //     faciliti: [
    //         faciliti.wi_fi,
    //         faciliti.fridge,
    //         faciliti.conditioner,
    //         faciliti.shower,
    //     ],
    //     price: 8300,
    //     breakfest: "Без питания",
    //     booking: false,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 6,
    //     hotelId: 6,
    //     userId: null,
    //     numberRoom: 1,
    //     name: "Стандартный номер для людей с ограниченными возможностями",
    //     info: "1 двуспальная кровать • 25 м.кв.",
    //     images: ["6_1", "6_2", "6_3"],
    //     faciliti: [faciliti.wi_fi, faciliti.conditioner, faciliti.shower],
    //     price: 23000,
    //     breakfest: "Полупансион",
    //     booking: false,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 7,
    //     hotelId: 7,
    //     userId: null,
    //     numberRoom: 1,
    //     name: "Стандарт с большой кроватью",
    //     info: "1 двуспальная кровать • 21 м.кв.",
    //     images: ["7_1", "7_2", "7_3"],
    //     faciliti: [
    //         faciliti.wi_fi,
    //         faciliti.fridge,
    //         faciliti.conditioner,
    //         faciliti.shower,
    //     ],
    //     price: 7700,
    //     breakfest: "Без питания",
    //     booking: false,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 8,
    //     hotelId: 8,
    //     userId: null,
    //     numberRoom: 1,
    //     name: "Номер Superior",
    //     info: "2 односпальные кровати • 25 м.кв.",
    //     images: ["8_1", "8_2", "8_3"],
    //     faciliti: [faciliti.wi_fi, faciliti.conditioner, faciliti.shower],
    //     price: 25600,
    //     breakfest: "Завтрак включён",
    //     booking: false,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 9,
    //     hotelId: 9,
    //     userId: 2,
    //     numberRoom: 1,
    //     name: "Двухместный номер",
    //     info: "2 односпальные кровати",
    //     images: ["9_1", "9_2", "9_3"],
    //     faciliti: [],
    //     price: 7840,
    //     breakfest: "Без питания",
    //     booking: true,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 10,
    //     hotelId: 10,
    //     userId: 1,
    //     numberRoom: 1,
    //     name: "SMART Небольшой",
    //     info: "Двухместный",
    //     images: ["10_1", "10_2", "10_3"],
    //     faciliti: [faciliti.wi_fi, faciliti.conditioner],
    //     price: 15800,
    //     breakfest: "Завтрак включён",
    //     booking: true,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 11,
    //     hotelId: 1,
    //     userId: 1,
    //     numberRoom: 2,
    //     name: "Первый класс с широкой кроватью",
    //     info: "1 двуспальная кровать • 22 м.кв.",
    //     images: ["1_4", "1_5", "1_6"],
    //     faciliti: [faciliti.wi_fi, faciliti.fridge],
    //     price: 7400,
    //     breakfest: "Без питания",
    //     booking: true,
    //     dayOfArrival: "2023-06-08",
    //     dayOfDeparture: "2023-06-10",
    //     numberOfPersons: 2,
    // },
    // {
    //     _id: 12,
    //     hotelId: 1,
    //     userId: null,
    //     numberRoom: 3,
    //     name: "Стандарт Двухкомнатный",
    //     info: "1 двуспальная кровать • 44 м.кв.",
    //     images: ["1_7", "1_8", "1_9"],
    //     faciliti: [faciliti.wi_fi, faciliti.fridge, faciliti.shower],
    //     price: 7800,
    //     breakfest: "Без питания",
    //     booking: false,
    //     dayOfArrival: "",
    //     dayOfDeparture: "2023-06-08",
    //     numberOfPersons: 2,
    // },
];

if (!localStorage.getItem("rooms")) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
}

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const rooms = JSON.parse(localStorage.getItem("rooms"));
            const newRoom = {
                _id: String(rooms.length + 1),
                ...JSON.parse(payload.getAll("data")),
                images: [],
            };
            rooms.push(newRoom);
            localStorage.setItem("rooms", JSON.stringify(rooms));
            resolve(newRoom);
        }, 1000);
    });

const get = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("rooms")));
        }, 1000);
    });

const getByIdRoom = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("rooms")).find(
                    (r) => r._id === id
                )
            );
        }, 1000);
    });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    get,
    getByIdRoom,
};
