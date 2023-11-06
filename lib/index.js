// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/';

// selecionar o botão
const button = document.querySelector(".btn-warning");

// escutar um evento no botão
button.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  // selecionar espaço para aparece atividade
  const activitySpace = document.querySelector("#activity");

  // fazer o fetch para bored api
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);

    // fazer o display de uma atividade aleatória
    activitySpace.innerText = data.activity;
  });

  // desabilitar o botão
  button.setAttribute("disabled", "");
})
