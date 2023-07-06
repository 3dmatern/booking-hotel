import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ onClick }) => {
    const [rate, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
        onClick({ rate: index + 1 });
    };

    const stars = Array(5).fill(0);

    return (
        <div>
            {stars.map((star, index) => {
                return (
                    <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index)}
                        color={index < rate ? "#ffc107" : "#e4e5e9"}
                        style={{
                            marginRight: "10px",
                            cursor: "pointer",
                        }}
                    />
                );
            })}
        </div>
    );
};
export default StarRating;
