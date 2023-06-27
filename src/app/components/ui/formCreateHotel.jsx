import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import Button from "../common/button";
import MultiSelectField from "../common/form/multiSelectField";
import FileField from "../common/form/fileField";
import { useDispatch, useSelector } from "react-redux";
import {
    getFacilities,
    getFacilitiesLoadingStatus,
    loadFacilitiesList,
} from "../../store/facilities";
import { createHotel } from "../../store/hotels";

const FormCreateHotel = () => {
    const dispatch = useDispatch();
    const facilities = useSelector(getFacilities());
    const facilitiesLoading = useSelector(getFacilitiesLoadingStatus());
    useEffect(() => {
        dispatch(loadFacilitiesList());
    }, []);

    const [data, setData] = useState({
        name: "",
        star: 3,
        address: "",
        description: "",
        facilities: [],
    });
    const [file, setFile] = useState(null);
    const [error, setError] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleChangeFile = ({ target }) => {
        setFile(target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("data", JSON.stringify(data));
        Object.values(file).map((f, index) => {
            formData.append("images", file[index]);
            return f;
        });
        dispatch(createHotel(formData));
    };

    if (facilitiesLoading) return "Loading...";
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
                    name="facilities"
                    defaultValue={data.facilities}
                    onChange={handleChange}
                    options={facilities}
                />
            </div>
            <div className="mb-3">
                <FileField
                    label="Фото отеля в формате jpg"
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
