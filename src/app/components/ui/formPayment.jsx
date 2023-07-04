import React, { useState } from "react";
import Button from "../common/button";
import TextField from "../common/form/textField";

const FormPayment = ({ onSubmit }) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };
    return (
        <div className="col-md-6 mx-auto shadow p-4">
            <div className="mb-3">
                <TextField
                    label="Введите 16-значный номер карты"
                    type="number"
                    name="number_card"
                    value={data.number_card}
                    onChange={handleChange}
                    error={error.number_card}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Срок действия карты (месяц/год)"
                    name="date_card"
                    value={data.date_card}
                    onChange={handleChange}
                    error={error.date_card}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="CVV-код"
                    name="cvv_card"
                    value={data.cvv_card}
                    onChange={handleChange}
                    error={error.cvv_card}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Имя держателя карты"
                    name="user_card"
                    value={data.user_card}
                    onChange={handleChange}
                    error={error.user_card}
                />
            </div>
            <Button
                className="warning"
                name="Оплатить"
                onClick={handleSubmit}
            />
        </div>
    );
};

export default FormPayment;
