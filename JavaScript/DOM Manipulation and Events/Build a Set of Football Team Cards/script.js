// Argentina 1986 World Cup Team
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Jorge Burruchaga", position: "midfielder", isCaptain: false },
    { name: "José Luis Brown", position: "defender", isCaptain: false },
    { name: "José Luis Cuciuffo", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false }
  ]
};

// Display head coach, team, and year
document.getElementById("head-coach").textContent = footballTeam.headCoach;
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;

// Dropdown and player card container
const select = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

/**
 * Render player cards in the DOM
 * @param {Array} players - Array of player objects
 */
function renderPlayers(players) {
  playerCards.innerHTML = ""; // Clear previous cards

  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const captainText = player.isCaptain ? "(Captain) " : "";

    card.innerHTML = `
      <h2>${captainText}${player.name}</h2>
      <p>Position: ${player.position}</p>
    `;

    playerCards.appendChild(card);
  });
}

// Event listener for position filtering
select.addEventListener("change", event => {
  const selected = event.target.value;

  if (selected === "all") {
    renderPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(p => p.position === selected);
    renderPlayers(filteredPlayers);
  }
});

// Initial render on page load
renderPlayers(footballTeam.players);
