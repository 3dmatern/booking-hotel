import React from "react";

const TextField = ({
    label,
    type,
    name,
    value,
    min,
    max,
    step,
    placeholder,
    onChange,
    error,
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <>
            {label && (
                <label htmlFor={name} className="pe-2">
                    {label}
                </label>
            )}
            <div className="input-group has-validation">
                <input
                    id={name}
                    type={type || "text"}
                    className={getInputClasses()}
                    name={name}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </>
    );
};

export default TextField;
