export function splitGetTime(date) {
    const transformArrayDate = date.split("-");
    return new Date(
        transformArrayDate[0],
        transformArrayDate[1] - 1,
        transformArrayDate[2]
    ).getTime();
}

export function joinCurrentDate(d) {
    let date = new Date();
    if (d) {
        date = new Date(Date.now() + d);
    }
    const year = date.getFullYear();
    const month =
        date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    const joinDate = [year, month, day].join("-");
    return joinDate;
}

export function joinDate(checkDate) {
    const date = new Date(checkDate);
    const year = date.getFullYear();
    const month =
        date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    const joinDate = [year, month, day].join("-");
    return joinDate;
}
