import React from "react";
import Faciliti from "./faciliti";

const FacilitiesList = ({ facilities }) => {
    return facilities.map((facit) => <Faciliti key={facit._id} {...facit} />);
};

export default FacilitiesList;
