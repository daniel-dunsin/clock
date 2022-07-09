//select elements
const secondsHand = document.querySelector(".hands.seconds");
const minuteHand = document.querySelector(".hands.minute");
const hourHand = document.querySelector(".hands.hour");
const digitalHour = document.querySelector(".digital-clock-hour");
const digitalMinutes = document.querySelector(".digital-clock-minutes");
const digitalSeconds = document.querySelector(".digital-clock-seconds");
const meridianEl = document.querySelector(".meridian");

function getTime() {
  const currTime = new Date();
  let currSeconds = currTime.getSeconds();
  let currMinutes = currTime.getMinutes();
  let currHours = currTime.getHours();
  const secondsDegree = currSeconds / 60;
  const minutesDegree = (secondsDegree + currMinutes) / 60;
  const hourDegree = (minutesDegree + currHours) / 12;
  setRotation(secondsHand, secondsDegree);
  setRotation(minuteHand, minutesDegree);
  setRotation(hourHand, hourDegree);

  // digital clock

  if (currHours > 12) {
    currHours -= 12;
    meridianEl.textContent = "PM";
  } else if (currHours == 24) {
    currHours = 0;
    meridianEl.textContent = "AM";
  } else {
    meridianEl.textContent = "AM";
  }
  currSeconds<10 ? currSeconds = `0${currSeconds}`: currSeconds = currSeconds;
  currHours<10 ? currHours = `0${currHours}`: currHours = currHours;
  currMinutes<10 ? currMinutes = `0${currMinutes}`: currMinutes = currMinutes;
  digitalHour.textContent = currHours;
  digitalMinutes.textContent = currMinutes;
  digitalSeconds.textContent = currSeconds;
}
function setRotation(element, degree) {
  element.style.transform = `rotate(${degree * 360}deg)`;
}
getTime();
setInterval(getTime, 1000);

