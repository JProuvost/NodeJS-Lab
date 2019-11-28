module.exports = {
    get: (callback) => {
        const currentDate = new Date();
        callback(null, {
            "date": currentDate.getDate(),
            "month": currentDate.getMonth(),
            "year": currentDate.getFullYear(),
            "hours": currentDate.getHours(),
            "minutes": currentDate.getMinutes(),
            "seconds": currentDate.getSeconds(),
        });
    }
};
//# sourceMappingURL=metrics.js.map