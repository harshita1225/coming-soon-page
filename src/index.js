// All of your javascript should go here :)

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countDown = document.getElementById("Countdown");

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  alert("Please subscribe to get notified!!");
});

//const currentYear = new Date.getFullYear();
const newYearTime = new Date(`December 20 2022 00:00:00`);

function updateCountDown() {
  const currTime = new Date();
  const diff = newYearTime - currTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.textContent = `${d} days`;
  hours.innerHTML = h < 10 ? `0${h} hours` : `${h} hours`;
  minutes.innerHTML = m < 10 ? `0${m} minutes` : `${m} minutes`;
  seconds.innerHTML = s < 10 ? `0${s} seconds` : `${s} seconds`;
}

setInterval(updateCountDown, 1000);
