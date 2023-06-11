import React, { useEffect, useState } from "react";
import { joinCurrentDate } from "../../utils/formatCalendarDate";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import Button from "../common/button";

const Calendar = ({ onSubmit }) => {
    const [data, setData] = useState({
        dayOfArrival: joinCurrentDate(),
        dayOfDeparture: joinCurrentDate(2),
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
                        name="dayOfArrival"
                        value={data.dayOfArrival}
                        min={joinCurrentDate()}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 d-flex align-items-center">
                    <TextField
                        label="Выезд"
                        type="date"
                        name="dayOfDeparture"
                        value={data.dayOfDeparture}
                        min={data.dayOfArrival}
                        onChange={handleChange}
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
