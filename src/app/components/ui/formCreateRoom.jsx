import React, { useState } from "react";
import Button from "../common/button";
import FileField from "../common/form/fileField";
import MultiSelectField from "../common/form/multiSelectField";
import TextField from "../common/form/textField";
import { useHotel } from "../../hooks/useHotel";
import { services } from "../../api/fake.api/services.api";
import SelectField from "../common/form/selectField";
import { useRoom } from "../../hooks/useRoom";

const FormCreateRoom = () => {
    const { createRoom } = useRoom();
    const { hotels, addRoomHotel } = useHotel();
    const [data, setData] = useState({
        hotelId: "1",
        numberRoom: 1,
        name: "",
        info: "",
        breakfest: "",
        numberOfPersons: "2",
        price: 0,
        services: [],
        images: [],
    });
    const [files, setFiles] = useState();
    const [error, setError] = useState({});

    const hotelsSelect = () => {
        const options = hotels.map((h) => ({ label: h.name, value: h._id }));
        return options;
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleChangeFile = (target) => {
        setFiles(target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const images = Object.values(files).map((f) => f.name);
        const newData = {
            ...data,
            hotelId: Number(data.hotelId),
            numberRoom: Number(data.numberRoom),
            numberOfPersons: Number(data.numberOfPersons),
            price: Number(data.price),
            images: images,
        };
        const newRoom = await createRoom(newData);
        const add = await addRoomHotel(
            Number(data.hotelId),
            Number(newRoom._id)
        );
        console.log(add);
    };
    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="row col-lg-6 mx-auto"
        >
            <div className="mb-3">
                <SelectField
                    label="Выберите отель"
                    name="hotelId"
                    value={data.hotelId}
                    options={hotelsSelect()}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Номер комнаты"
                    type="number"
                    name="numberRoom"
                    value={data.numberRoom}
                    min="0"
                    step="1"
                    onChange={handleChange}
                    error={error.numberRoom}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Название комнаты"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={error.name}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Информация о комнате"
                    name="info"
                    value={data.info}
                    onChange={handleChange}
                    error={error.info}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Информация о питании"
                    name="breakfest"
                    value={data.breakfest}
                    onChange={handleChange}
                    error={error.breakfest}
                />
            </div>
            <div className="mb-3">
                <SelectField
                    label="Количество человек"
                    name="numberOfPersons"
                    value={data.numberOfPersons}
                    options={[
                        { label: "1 Взрослый", value: 1 },
                        { label: "2 Взрослых", value: 2 },
                    ]}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Стоимость за 2 ночи"
                    type="number"
                    name="price"
                    min="0"
                    step="1"
                    value={data.price}
                    onChange={handleChange}
                    error={error.price}
                />
            </div>
            <div className="mb-3">
                <MultiSelectField
                    label="Выберите сервисы и удобства"
                    name="services"
                    defaultValue={data.services}
                    onChange={handleChange}
                    options={services}
                />
            </div>
            <div className="mb-3">
                <FileField
                    label="Остальные фото отеля"
                    type="file"
                    name="images"
                    onChange={handleChangeFile}
                    error={error.images}
                    accept="image/png,image/jpeg"
                    multiple="multiple"
                />
            </div>
            <div className="mb-3">
                <Button className="primary" name="Добавить комнату" />
            </div>
        </form>
    );
};

export default FormCreateRoom;
