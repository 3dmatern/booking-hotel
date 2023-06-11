export function splitGetTime(date) {
    const transformArrayDate = date.split("-");
    return new Date(
        transformArrayDate[0],
        transformArrayDate[1] - 1,
        transformArrayDate[2]
    ).getTime();
}

export function joinCurrentDate(d) {
    const date = new Date();
    const year = date.getFullYear();
    const month =
        date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    let day = d ? date.getDate() + d : date.getDate();
    day = day < 10 ? "0" + day : day;
    const joinDate = [year, month, day].join("-");
    return joinDate;
}
