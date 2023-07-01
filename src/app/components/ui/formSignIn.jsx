import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import Button from "../common/button";
import { Link, useNavigate } from "react-router-dom";
import { validator } from "../../utils/validator";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, signIn } from "../../store/users";

const initialLogin = { email: "", password: "" };

const FormSignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signInError = useSelector(getAuthErrors());
    const [data, setData] = useState(initialLogin);
    const [error, setError] = useState({});

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
        },
    };

    const validate = () => {
        const error = validator(data, validatorConfig);
        setError(error);
        return Object.keys(error).length === 0;
    };

    const isValid = Object.keys(error).length === 0;

    useEffect(() => {
        validate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signIn({ payload: data, navigate }));
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
                    error={error.email}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={error.password}
                />
            </div>
            {signInError && <p className="text-danger">{signInError}</p>}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    Нет аккаунта?{" "}
                    <Link to="register" className="text-primary">
                        Зарегистрируйтесь
                    </Link>
                </div>

                <Button className="success" name="Войти" disabled={!isValid} />
            </div>
        </form>
    );
};

export default FormSignIn;
