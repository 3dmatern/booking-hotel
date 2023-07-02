export function isRoomAvailable(rooms, startDate, endDate) {
    for (let i = 0; i < rooms.length; i++) {
        const booking = rooms[i];
        if (
            startDate < booking.departureDate &&
            endDate > booking.arrivalDate
        ) {
            return false;
        }
    }
    return true;
}
