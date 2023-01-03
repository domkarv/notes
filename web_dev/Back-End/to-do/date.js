const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const day = new Date().toLocaleDateString("en-US", options);

module.exports = day;
