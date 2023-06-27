import React from "react";

const Faciliti = ({ label, value }) => {
    return (
        <div className="p-3" key={label}>
            <p>
                <i className={"bi bi-" + value}></i>
                {" " + label}
            </p>
        </div>
    );
};

export default Faciliti;
