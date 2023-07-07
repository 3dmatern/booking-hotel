import React, { useEffect, useState } from "react";
import { joinCurrentDate } from "../../utils/formatCalendarDate";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import Button from "../common/button";

const Calendar = ({ onSubmit, error }) => {
    const [data, setData] = useState({
        arrivalDate: joinCurrentDate(),
        departureDate: joinCurrentDate(172800000),
        numberOfPersons: "2",
    });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    useEffect(() => {
        onSubmit(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <form onSubmit={handleSubmit} className="needs-validation">
            <div className="d-flex flex-wrap justify-content-around mb-4">
                <div className="mb-2 d-flex align-items-center">
                    <TextField
                        label="Заезд"
                        type="date"
                        name="arrivalDate"
                        value={data.arrivalDate}
                        min={joinCurrentDate()}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 d-flex align-items-center">
                    <TextField
                        label="Выезд"
                        type="date"
                        name="departureDate"
                        value={data.departureDate}
                        min={data.arrivalDate}
                        onChange={handleChange}
                        error={error}
                    />
                </div>
                <SelectField
                    name="numberOfPersons"
                    value={data.numberOfPersons}
                    options={[
                        { label: "1 Взрослый", value: 1 },
                        { label: "2 Взрослых", value: 2 },
                    ]}
                    onChange={handleChange}
                />
                <div className="mb-2">
                    <Button
                        type="submit"
                        className="secondary"
                        name="Найти номера"
                    />
                </div>
            </div>
        </form>
    );
};

export default Calendar;
