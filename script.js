$(function () {
  const body = $("body");
  const header = $("header");
  const dateTimeEl = $("#current-date-time");
  const mainSection = $("#main-section");
  const newProjetSection = $("#new-project");
  const newProjectButton = $("#new-project-button");
  const infoTable = $("#information-table");

  let dateTimeInterval = setInterval(function () {
    let currentDateTime = dayjs();
    dateTimeEl.html(currentDateTime.format("MMM D, YYYY [at] hh:mm:ss a"));
  }, 1000);
});
