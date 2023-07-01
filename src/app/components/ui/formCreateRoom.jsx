import React, { useEffect, useState } from "react";
import Button from "../common/button";
import FileField from "../common/form/fileField";
import MultiSelectField from "../common/form/multiSelectField";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import { useDispatch, useSelector } from "react-redux";
import {
    getFacilities,
    getFacilitiesLoadingStatus,
    loadFacilitiesList,
} from "../../store/facilities";
import { getHotels } from "../../store/hotels";
import { createRoom } from "../../store/rooms";
import { useNavigate } from "react-router-dom";

const FormCreateRoom = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const facilities = useSelector(getFacilities());
    const facilitiesLoading = useSelector(getFacilitiesLoadingStatus());
    const hotels = useSelector(getHotels());
    const [data, setData] = useState({
        hotelId: "",
        name: "",
        info: "",
        breakfest: "",
        numberOfPersons: "2",
        price: 0,
        facilities: [],
    });
    const [file, setFile] = useState();
    const [error, setError] = useState({});
    const [options, setOptions] = useState([]);

    useEffect(() => {
        dispatch(loadFacilitiesList());
    }, []);

    useEffect(() => {
        if (!facilitiesLoading && hotels) {
            setOptions(hotels.map((h) => ({ label: h.name, value: h._id })));
        }
    }, [facilitiesLoading, hotels]);

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
        const newData = {
            ...data,
            hotelId: data.hotelId,
            numberRoom: Number(data.numberRoom),
            numberOfPersons: Number(data.numberOfPersons),
            price: Number(data.price),
        };
        const formData = new FormData();
        formData.append("data", JSON.stringify(newData));
        Object.values(file).map((f, index) => {
            formData.append("images", file[index]);
            return f;
        });
        dispatch(createRoom({ formData, navigate }));
    };

    if (facilitiesLoading) return "Loading...";
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
                    options={options}
                    onChange={handleChange}
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
                    name="facilities"
                    defaultValue={data.facilities}
                    onChange={handleChange}
                    options={facilities}
                />
            </div>
            <div className="mb-3">
                <FileField
                    label="Фото команты в формате jpg"
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
