import React, { useEffect } from "react";
import Faciliti from "./faciliti";
import { useDispatch } from "react-redux";
import { loadFacilitiesList } from "../../../store/facilities";

const FacilitiesList = ({ facilities }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadFacilitiesList());
    }, []);
    return (
        <>
            {facilities.map((facit) => (
                <Faciliti key={facit._id} {...facit} />
            ))}
        </>
    );
};

export default FacilitiesList;
