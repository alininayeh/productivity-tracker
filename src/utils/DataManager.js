const DataManager = {
  save(type = "", rating = "", notes = "") {
    const data = this.getData();
    const today = new Date().toDateString();
    let lastDay = this.load();

    if (lastDay) {
      data[data.length - 1] = {
        date: lastDay.date,
        day: type === "DAY" ? rating : lastDay.day,
        mood: type === "MOOD" ? rating : lastDay.mood,
        notes: notes ? notes : lastDay.notes
      };
    } else {
      data.push({
        date: today,
        day: type === "DAY" ? rating : "",
        mood: type === "MOOD" ? rating : "",
        notes: notes
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

// TODO: remove this when everything is ready
DataManager._createFakeData = (n) => {
  const dayInSeconds = 86400000;
  const now = new Date().getTime();

  const days = Array.apply(null, Array(n)).map((day, i) => {
    return {
      date: new Date(now - dayInSeconds * i).toDateString(),
      day: Math.floor(Math.random() * 2) ? "UP" : "DOWN",
      mood: Math.floor(Math.random() * 2) ? "UP" : "DOWN",
      notes:Math.floor(Math.random() * 2) ?  "Lorem ipsum dolor sit amet" : ""
    }
  });

  localStorage.setItem("data", JSON.stringify(days));
};

window.createFakeData = DataManager._createFakeData;
export default DataManager;
