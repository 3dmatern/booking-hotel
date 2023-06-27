import React from "react";

const Modal = ({
    id,
    name,
    btnClose,
    btnApply,
    classNameBtn,
    onClick,
    children,
}) => {
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            aria-labelledby={`${id}Label`}
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${id}Label`}>
                            {name}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            {btnClose}
                        </button>
                        {btnApply && (
                            <button
                                type="button"
                                className={
                                    "btn btn-" + classNameBtn || "primary"
                                }
                                data-bs-dismiss="modal"
                                onClick={onClick}
                            >
                                {btnApply}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
