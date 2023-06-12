import React from "react";

const Button = ({ type, className, name, onClick, disabled }) => {
    return (
        <button
            type={type || "submit"}
            className={"btn btn-" + className}
            onClick={onClick && onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

export default Button;
