export const DataManager = {
  save(type, rating) {
    const data = this.getData();
    const today = new Date().toDateString();
    let lastDay = this.load();

    if (lastDay) {
      data[data.length - 1] = {
        date: lastDay.date,
        day: type === "DAY" ? rating : lastDay.day,
        mood: type === "MOOD" ? rating : lastDay.mood
      };
    } else {
      data.push({
        date: today,
        day: type === "DAY" ? rating : "",
        mood: type === "MOOD" ? rating : ""
      });
    }

    localStorage.setItem("data", JSON.stringify(data));
  },

  load() {
    const data = this.getData();
    const today = new Date().toDateString();
    let lastDay = data.filter(item => item.date === today);

    if (lastDay.length) {
      return lastDay[0];
    }
  },

  getData() {
    const data = localStorage.getItem("data") || "[]";
    return JSON.parse(data);
  }
};
