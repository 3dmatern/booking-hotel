import Button from "../button";

const TableBody = ({ data, onClick }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    <td>{item.hotelName}</td>
                    <td>{item.roomName}</td>
                    <td>{item.guestFirstName}</td>
                    <td>{item.guestLastName}</td>
                    <td>{item.guestPhone}</td>
                    <td>{item.arrivalDate}</td>
                    <td>{item.departureDate}</td>
                    <td>{item.bookingStatus}</td>
                    <td>
                        <Button
                            className="danger"
                            name="Снять бронь"
                            onClick={() => onClick(item._id)}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
