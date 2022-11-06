function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/flags/icon=${player1}.svg" alt="${player1}" />
      <strong>${hour}</strong>
      <img src="assets/flags/icon=${player2}.svg" alt="${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s;">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("england", "09:00", "iran") +
      createGame("senegal", "12:00", "netherlands") +
      createGame("united states", "15:00", "wales")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "06:00", "cameroon") +
      createGame("portugal", "12:00", "ghana") +
      createGame("brazil", "15:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("qatar", "09:00", "senegal") +
      createGame("netherlands", "12:00", "ecuador") +
      createGame("england", "15:00", "united states")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "06:00", "australia") +
      createGame("poland", "09:00", "saudi arabia") +
      createGame("france", "12:00", "denmark")
  )
