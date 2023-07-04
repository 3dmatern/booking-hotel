const payments = [
    {
        _id: "1",
        bookingId: "1",
        paymentAmount: 6000,
        paymentDate: 1688473570565,
        paymentType: "Card",
        paymentStatus: true,
    },
];

if (!localStorage.getItem("payments")) {
    localStorage.setItem("payments", JSON.stringify(payments));
}

const create = (payload) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const payments = JSON.parse(localStorage.getItem("payments"));
            const newPayment = {
                _id: String(payments.length + 1),
                ...payload,
            };
            payments.push(newPayment);
            localStorage.setItem("payments", JSON.stringify(payments));
            resolve(newPayment);
        }, 200);
    });

const get = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("payments")));
        }, 200);
    });

export default {
    create,
    get,
};
