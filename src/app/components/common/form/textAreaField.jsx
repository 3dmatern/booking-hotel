import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({
    label,
    name,
    value,
    rows,
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
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <textarea
                    className={getInputClasses()}
                    name={name}
                    value={value}
                    id={name}
                    rows={rows || "3"}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                {error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};

TextAreaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    rows: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
};

export default TextAreaField;
