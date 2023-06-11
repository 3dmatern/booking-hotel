import React, { useState } from "react";
import TextField from "../common/form/textField";
import Button from "../common/button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const FormSignIn = () => {
    const { signIn } = useAuth();
    const [data, setData] = useState({
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
        signIn(data);
    };
    return (
        <form onSubmit={handleSubmit}>
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
                    Нет аккаунта?{" "}
                    <Link to="register" className="text-primary">
                        Зарегистрируйтесь
                    </Link>
                </div>

                <Button className="success" name="Войти" />
            </div>
        </form>
    );
};

export default FormSignIn;
