export function isRoomAvailable(days, startDate, endDate) {
    for (let i = 0; i < days.length; i++) {
        const booking = days[i];
        if (
            startDate < booking.dayOfDeparture &&
            endDate > booking.dayOfArrival
        ) {
            return false;
        }
    }
    return true;
}
