import { services } from "./services.api";

const hotels = [
    {
        _id: 1,
        userId: 1,
        name: "Бета Измайлово",
        star: 3,
        address: "Москва, Измайловское шоссе, 71, корп. 2Б",
        description:
            "Гостиница Бета Измайлово расположена в городе Москва в 8,8 км от центра. Количество звёзд: 3. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, мини-бар. В гостинице около 975 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Уборка — каждый день. В гостинице есть ресторан, бар, конференц-зал. У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. За любой помощью обращайтесь на ресепшн. К вашим услугам: прачечная, обслуживание номеров, камера хранения.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.parking,
            services.card_payment,
        ],
        rooms: [1, 11, 12],
        rate: 5.0,
        image: "/image/hotels/1.webp",
        images: [
            "/image/hotels/1_1.webp",
            "/image/hotels/1_2.webp",
            "/image/hotels/1_3.webp",
        ],
    },
    {
        _id: 2,
        userId: 1,
        name: "Гамма Измайлово",
        star: 3,
        address: "Москва, Измайловское шоссе, 71к4Г-Д",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 7,9 км от центра. Количество звёзд: 3. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, посуда, чайник, сейф, отопление, мини-бар. В гостинице около 2000 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Уборка — каждый день. Берите своих питомцев — им будут рады! В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.pool,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [2],
        rate: 4.9,
        image: "/image/hotels/2.webp",
        images: [
            "/image/hotels/2_1.webp",
            "/image/hotels/2_2.webp",
            "/image/hotels/2_3.webp",
        ],
    },
    {
        _id: 3,
        userId: 1,
        name: "Cosmos Moscow Vdnh Hotel",
        star: 3,
        address: "Москва, проспект Мира, 150",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 7,9 км от центра. Количество звёзд: 3. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, сейф, отопление. В гостинице около 1777 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Уборка — каждый день. Берите своих питомцев — им будут рады! В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый, с подогревом. Есть возможность взять напрокат машину. У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 15:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, консьерж-сервис, камера хранения.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.pool,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [3],
        rate: 4.3,
        image: "/image/hotels/3.webp",
        images: [
            "/image/hotels/3_1.webp",
            "/image/hotels/3_2.webp",
            "/image/hotels/3_3.webp",
        ],
    },
    {
        _id: 4,
        userId: 1,
        name: "Марриотт Гранд Отель",
        star: 5,
        address: "Москва, Тверская улица, 26/1",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 1,8 км от центра. Количество звёзд: 5. Здесь созданы все условия для комфортного проживания — есть кондиционер, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 387 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Уборка — каждый день. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, консьерж-сервис, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.pool,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [4],
        rate: 5.0,
        image: "/image/hotels/4.webp",
        images: [
            "/image/hotels/4_1.webp",
            "/image/hotels/4_2.webp",
            "/image/hotels/4_3.webp",
        ],
    },
    {
        _id: 5,
        userId: 1,
        name: "Холидей Инн Москва",
        star: 4,
        address: "Москва, Русаковская улица, 24",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 5,3 км от центра. Количество звёзд: 4. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 523 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. Есть возможность взять напрокат велосипед.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.pool,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [5],
        rate: 5.0,
        image: "/image/hotels/5.webp",
        images: [
            "/image/hotels/5_1.webp",
            "/image/hotels/5_2.webp",
            "/image/hotels/5_3.webp",
        ],
    },
    {
        _id: 6,
        userId: 1,
        name: "Novotel",
        star: 4,
        address: "Москва, Пресненская набережная, 2",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 5,2 км от центра. Количество звёзд: 4. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 361 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. Есть возможность взять напрокат велосипед.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [6],
        rate: 5.0,
        image: "/image/hotels/6.webp",
        images: [
            "/image/hotels/6_1.webp",
            "/image/hotels/6_2.webp",
            "/image/hotels/6_3.webp",
        ],
    },
    {
        _id: 7,
        userId: 1,
        name: "Альфа Измайлово",
        star: 4,
        address: "Москва, Измайловское шоссе, 71, корп. А",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 8,9 км от центра. Количество звёзд: 4. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 946 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. Есть возможность взять напрокат велосипед.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.pool,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [7],
        rate: 4.9,
        image: "/image/hotels/7.webp",
        images: [
            "/image/hotels/7_1.webp",
            "/image/hotels/7_2.webp",
            "/image/hotels/7_3.webp",
        ],
    },
    {
        _id: 8,
        userId: 1,
        name: "AZIMUT Сити Отель",
        star: 4,
        address: "Москва, Смоленская улица, 8",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 2,6 км от центра. Количество звёзд: 4. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 474 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. Есть возможность взять напрокат велосипед.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.gym,
            services.parking,
            services.card_payment,
        ],
        rooms: [8],
        rate: 4.9,
        image: "/image/hotels/8.webp",
        images: [
            "/image/hotels/8_1.webp",
            "/image/hotels/8_2.webp",
            "/image/hotels/8_3.webp",
        ],
    },
    {
        _id: 9,
        userId: 1,
        name: "New City Inn",
        star: 3,
        address: "Москва, Павелецкая площадь, 1А, стр. 1",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 3,2 км от центра. Количество звёзд: 3. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 55 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. Есть возможность взять напрокат велосипед.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.conditioner,
            services.parking,
            services.card_payment,
        ],
        rooms: [9],
        rate: 4.3,
        image: "/image/hotels/9.webp",
        images: [
            "/image/hotels/9_1.webp",
            "/image/hotels/9_2.webp",
            "/image/hotels/9_3.webp",
        ],
    },
    {
        _id: 10,
        userId: 1,
        name: "Парк Тауэр",
        star: 4,
        address: "Москва, Дмитровское шоссе, 27",
        description:
            "Гостиница Гамма Измайлово расположена в городе Москва в 8,8 км от центра. Количество звёзд: 4. Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник, телевизор, фен, утюг, чай/кофе в номерах, чайник, сейф, отопление, терраса, мини-бар. В гостинице около 330 номеров — можно выбрать любой понравившийся и узнать подробнее, что в нём. По запросу предоставляются номера для некурящих. Берите своих питомцев — им будут рады!  В гостинице есть ресторан, бар, тренажёрный зал, сауна, конференц-зал. Можно прогуляться по территории и в саду. И вы наверняка захотите отдохнуть у бассейна — он тут тоже есть. Причём крытый. Есть возможность взять напрокат велосипед.  У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить родным по видео. Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до 12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке регистрации и помогут с размещением. Лифт внутри есть. В гостинице есть и удобства для людей с ограниченными возможностями. Если вы на машине, можете оставить её на парковке. Если вы добираетесь своим ходом, воспользуйтесь услугой трансфера. За любой помощью обращайтесь на ресепшн. К вашим услугам: химчистка, прачечная, обслуживание номеров, камера хранения, ускоренная регистрация заезда/отъезда.",
        services: [
            services.wi_fi,
            services.gym,
            services.conditioner,
            services.parking,
            services.card_payment,
        ],
        rooms: [10],
        rate: 4.5,
        image: "/image/hotels/10.webp",
        images: [
            "/image/hotels/10_1.webp",
            "/image/hotels/10_2.webp",
            "/image/hotels/10_3.webp",
        ],
    },
];

// if (!localStorage.getItem("hotels")) {
//     localStorage.setItem("hotels", JSON.stringify(hotels));
// }

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const hotels = JSON.parse(localStorage.getItem("hotels"));
            const newHotel = {
                _id: hotels.length + 1,
                rooms: [],
                rate: 0,
                ...payload,
            };
            hotels.push(newHotel);
            localStorage.setItem("hotels", JSON.stringify(hotels));
            resolve(newHotel);
        }, 1000);
    });

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("hotels")));
        }, 1000);
    });

const updateHotel = (id, data) =>
    new Promise((resolve) => {
        const hotels = JSON.parse(localStorage.getItem("hotels"));
        const hotelIndex = hotels.findIndex((h) => h._id === id);
        hotels[hotelIndex] = { ...hotels[hotelIndex], ...data };
        localStorage.setItem("hotels", JSON.stringify(hotels));
        resolve(hotels[hotelIndex]);
    });

const addRoomForHotel = (id, room) =>
    new Promise((resolve) => {
        const hotels = JSON.parse(localStorage.getItem("hotels"));
        const hotelIndex = hotels.findIndex((h) => h._id === id);
        hotels[hotelIndex].rooms.push(room);
        localStorage.setItem("hotels", JSON.stringify(hotels));
        resolve(hotels[hotelIndex]);
    });

const getByIdHotel = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("hotels")).find(
                    (hotel) => hotel._id === id
                )
            );
        }, 1000);
    });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    fetchAll,
    getByIdHotel,
    updateHotel,
    addRoomForHotel,
};
