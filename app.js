let bling = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

function draftTeams() {
  players.forEach((player => {
    let draft = Math.random() * 2
    console.log(draft);

    if (draft < 1) {
      player.teamNumber = 1
    } else {
      player.teamNumber = 2
    }
  }))
  console.log(players);
  drawTeams()
}

function drawTeams() {
  const teamRoster1 = document.getElementById('roster-1')
  const team1 = players.filter((player) => player.teamNumber == 1)
  const teamRoster2 = document.getElementById('roster-2')
  const team2 = players.filter((player) => player.teamNumber == 2)
  teamRoster1.innerText = ''
  teamRoster2.innerText = ''

  for (let i = 0; i < team1.length; i++) {
    teamRoster1.innerText += team1[i].emoji
  }
  for (let i = 0; i < team2.length; i++) {
    teamRoster2.innerText += team2[i].emoji
  }
}

function placeBets(team, bet) {
  let team1Skill = 0
  let team2Skill = 0
  if (bet == 500) {
    bet = bling
  }
  if (bet > bling && bling != 0) {
    window.alert('Not enough dosh, chump!')
    return
  }
  checkBling(bet)
  players.forEach((player) => {
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    } else {
      team2Skill += player.skill
    }
  })
  console.log(team1Skill + " vs " + team2Skill);

  if (team == 1 && team1Skill > team2Skill) {
    bling += bet
  } else if (team == 2 && team2Skill > team1Skill) {
    bling += bet
  } else if (team == 1 && team1Skill < team2Skill) {
    bling -= bet
  } else if (team == 2 && team2Skill < team1Skill) {
    bling -= bet
  }

  checkBling(bet)
  drawBling()
  draftTeams()
}

function drawBling() {
  const blingBox = document.getElementById('bling-box')
  blingBox.innerText = '$' + bling
}

// function lose() {
//   if (bling <= 0) {
//     window.alert('YOU LOSE GOOD DAY SIR!')
//   }
// }
// I don't think you can mathematically get below $5 with these bet amounts, but just in case so you don't get stuck and can't bet
function checkBling(bet) {
  if (bet < 5 || bling == 0) {
    window.alert('YOU LOSE GOOD DAY SIR!')
  }
  if (bling == 0) {
    bling = 100
  }
}

function resetTeams() {
  players
}
draftTeams()
// drawTeam1()
// drawTeam2()
drawBling()