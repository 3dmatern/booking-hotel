import React from "react";

const Button = ({ type, className, name, onClick }) => {
    return (
        <button
            type={type || "submit"}
            className={"btn btn-" + className}
            onClick={onClick && onClick}
        >
            {name}
        </button>
    );
};

export default Button;
