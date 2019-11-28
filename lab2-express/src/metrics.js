module.exports = {
  get(callback) {
      const date = new Date();
      callback(null, {
          "date": date.getDate(),
          "month": date.getMonth(),
          "year": date.getFullYear(),
          "hours": date.getHours(),
          "minutes": date.getMinutes(),
          "seconds": date.getSeconds(),
      });
  }
};
