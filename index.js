let Colley = require('colley-rankings')
let leftPad = require('left-pad')

let C = Colley(12)

let fuel = {
  'id': 0,
  'division': 'Pacific',
  'city': 'Dallas',
  'name': 'Dallas Fuel',
  'country': 'United States'
}

let gladiators = {
  'id': 1,
  'division': 'Pacific',
  'city': 'Los Angeles',
  'name': 'Los Angeles Gladiators',
  'country': 'United States'
}

let valiant = {
  'id': 2,
  'division': 'Pacific',
  'city': 'Los Angeles',
  'name': 'Los Angeles Valiant',
  'country': 'United States'
}

let shock = {
  'id': 3,
  'division': 'Pacific',
  'city': 'San Francisco',
  'name': 'San Francisco Shock',
  'country': 'United States'
}

let dynasty = {
  'id': 4,
  'division': 'Pacific',
  'city': 'Seoul',
  'name': 'Seoul Dynasty',
  'country': 'South Korea'
}

let dragons = {
  'id': 5,
  'division': 'Pacific',
  'city': 'Shanghai',
  'name': 'Shanghai Dragons',
  'country': 'China'
}

let uprising = {
  'id': 6,
  'division': 'Atlantic',
  'city': 'Boston',
  'name': 'Boston Uprising',
  'country': 'United States'
}

let outlaws = {
  'id': 7,
  'division': 'Atlantic',
  'city': 'Houston',
  'name': 'Houston Outlaws',
  'country': 'United States'
}

let spitfire = {
  'id': 8,
  'division': 'Atlantic',
  'city': 'London',
  'name': 'London Spitfire',
  'country': 'United Kingdom'
}

let mayhem = {
  'id': 9,
  'division': 'Atlantic',
  'city': 'Miami-Orlando',
  'name': 'Florida Mayhem',
  'country': 'United States'
}

let excelsior = {
  'id': 10,
  'division': 'Atlantic',
  'city': 'New York City',
  'name': 'New York Excelsior',
  'country': 'United States'
}

let fusion = {
  'id': 11,
  'division': 'Atlantic',
  'city': 'Philadelphia',
  'name': 'Philadelphia Fusion',
  'country': 'United States'
}

let teams = [
  fuel, gladiators, valiant, shock, dynasty, dragons,
  uprising, outlaws, spitfire, mayhem, excelsior, fusion
]

// 2018-01-10
C.addGame(valiant.id, shock.id)
C.addGame(gladiators.id, dragons.id)
C.addGame(dynasty.id, fuel.id)

// 2018-01-11
C.addGame(spitfire.id, mayhem.id)
C.addGame(fusion.id, outlaws.id)
C.addGame(excelsior.id, uprising.id)

// 2018-01-12
C.addGame(valiant.id, fuel.id)
C.addGame(uprising.id, mayhem.id)
C.addGame(shock.id, dragons.id)

// 2018-01-13
C.addGame(spitfire.id, fusion.id)
// excelsior vs outlaws
// dynasty vs gladiators

let scores = C.solve()

let display = function (team) {
  let division = leftPad('[' + team.division + '] ', 11)
  return division + team.name
}

let rankings = []
for (let i = 0; i < scores.array.length; i++) {
  let team = teams[i]
  rankings.push([display(team), scores.array[i]])
}

rankings.sort(function (a, b) {
  return b[1] - a[1]
})

for (let i = 0; i < rankings.length; i++) {
  let rank = leftPad(i + 1, 2)
  console.log(rank + ' ' + rankings[i][0] + ' (' + rankings[i][1] + ')')
}
