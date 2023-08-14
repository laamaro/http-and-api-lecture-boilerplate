// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/';

const button = document.querySelector(".btn-warning");

const activityRandom = document.querySelector("#activity");

button.addEventListener("click", (event) => {

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.activity);
    // console.log(data.price);

    activityRandom.innerHTML = data.activity;
  });

  event.currentTarget.classList.add("disabled");
})
