import React, { useState } from "react";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import Button from "../common/button";
import { services } from "../../api/fake.api/services.api";
import MultiSelectField from "../common/form/multiSelectField";
import FileField from "../common/form/fileField";
import { useHotel } from "../../hooks/useHotel";

const FormCreateHotel = ({ currentUser }) => {
    const { createHotel } = useHotel();
    const [data, setData] = useState({
        name: "",
        star: 3,
        address: "",
        description: "",
        services: [],
        image: "",
        images: [],
    });
    const [file, setFile] = useState();
    const [files, setFiles] = useState();
    const [error, setError] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleChangeFile = (target) => {
        setFile(target.files[0]);
        setFiles(target.files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const image = file.name;
        const images = Object.values(files).map((f) => f.name);
        const newData = {
            ...data,
            userId: currentUser._id,
            image: image,
            images: images,
        };
        console.log(newData);
        createHotel(newData);
    };
    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="row col-lg-6 mx-auto"
        >
            <div className="mb-3">
                <TextField
                    label="Название отеля"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={error.name}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Количество звезд"
                    type="number"
                    name="star"
                    value={data.star}
                    min="1"
                    max="5"
                    step="1"
                    onChange={handleChange}
                    error={error.star}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Адрес"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    error={error.address}
                />
            </div>
            <div className="mb-3">
                <TextAreaField
                    label="Описание отеля"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    error={error.description}
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
                    label="Главное фото отеля"
                    type="file"
                    name="image"
                    onChange={handleChangeFile}
                    error={error.image}
                    accept="image/png,image/jpeg"
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
                <Button className="primary" name="Добавить отель" />
            </div>
        </form>
    );
};

export default FormCreateHotel;
