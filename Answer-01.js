//! Implement the function to display the day of the week for a given date.

function getDayOfWeek(dateString) {
  const dateParts = dateString.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);

  const date = new Date(year, month, day);
  // console.log(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDay = date.getDay();
  // console.log(getDay);
  const dayOfWeek = daysOfWeek[getDay];
  return dayOfWeek;
}

// take input from user
const date = "2023-06-21";
// const currentDate = new Date();

const dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek);
