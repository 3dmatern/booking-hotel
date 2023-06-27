import React from "react";

const FileField = ({ label, name, onChange, error, accept, multiple }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <>
            <label htmlFor={name} className="pe-2">
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    id={name}
                    type="file"
                    className={getInputClasses()}
                    name={name}
                    onChange={onChange}
                    accept={accept}
                    multiple={multiple}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </>
    );
};

export default FileField;
