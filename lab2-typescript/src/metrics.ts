type metricsType = {
    (err: Error | null, data: object): void;
}

module.exports = {
  get: (callback: metricsType) => {
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
