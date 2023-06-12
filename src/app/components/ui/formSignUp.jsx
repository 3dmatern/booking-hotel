import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import Button from "../common/button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { validator } from "../../utils/validator";

const initialRegister = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
};

const FormSignUp = () => {
    const { signUp } = useAuth();
    const [data, setData] = useState(initialRegister);
    const [error, setError] = useState({});
    const [enterError, setEnterError] = useState(true);

    const validConfig = {
        firstname: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
            minName: {
                message: "Имя должно состоять минимум из 2-ух символов",
                value: 2,
            },
        },
        lastname: {
            isRequired: {
                message: "Фамилия обязательна для заполенения",
            },
            minName: {
                message: "Фамилия должна состоять минимум из 2-ух символов",
                value: 2,
            },
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
            isCapital: {
                message: "Пароль должен содержать минимум одну заглавную букву",
            },
            isContainDigit: {
                message: "Пароль должен содержать минимум одно число",
            },
            minPassword: {
                message: "Пароль должен состоять минимум из 8 символов",
            },
        },
    };

    const validate = () => {
        const error = validator(data, validConfig);
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
        setEnterError(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
        try {
            await signUp({ ...data });
        } catch (error) {
            setError(error);
        }
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
                    error={error.firstname}
                />
            </div>
            <div className="mb-3">
                <TextField
                    label="Фамилия"
                    type="text"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    error={error.lastname}
                />
            </div>
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
            {enterError && <p className="text-danger">{enterError}</p>}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    Есть аккаунт?{" "}
                    <Link to="/sign" className="text-primary">
                        Войдите
                    </Link>
                </div>

                <Button
                    className="success"
                    name="Зарегистрироваться"
                    disabled={!isValid || enterError}
                />
            </div>
        </form>
    );
};

export default FormSignUp;
