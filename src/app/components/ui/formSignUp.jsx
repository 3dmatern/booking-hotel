import React, { useState } from "react";
import TextField from "../common/form/textField";
import Button from "../common/button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const FormSignUp = () => {
    const { signUp } = useAuth();
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <TextField
                    label="Имя"
                    type="text"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Фамилия"
                    type="text"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    Есть аккаунт?{" "}
                    <Link to="/sign" className="text-primary">
                        Войдите
                    </Link>
                </div>

                <Button className="success" name="Зарегистрироваться" />
            </div>
        </form>
    );
};

export default FormSignUp;
