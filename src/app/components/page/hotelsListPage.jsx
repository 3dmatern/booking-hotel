import React, { useState } from "react";
import HotelCard from "../ui/hotelCard";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import { useHotel } from "../../hooks/useHotel";

const HotelsListPage = () => {
    const { hotels } = useHotel();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const hotelCrop = paginate(hotels, currentPage, pageSize);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-3 position-relative">
                {hotelCrop.map((hotel) => (
                    <HotelCard
                        key={hotel._id}
                        id={hotel._id}
                        name={hotel.name}
                        star={hotel.star}
                        rate={hotel.rate}
                        image={hotel.image}
                    />
                ))}
            </div>
            <Pagination
                itemsCount={hotels.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default HotelsListPage;
