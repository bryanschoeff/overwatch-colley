let leftPad = require('left-pad')

let owl = require('./owl.js')

let description = function (team) {
  let division = leftPad('[' + team.division + '] ', 11)
  return division + team.name
}

exports.print = function (scores) {
  let rankings = []
  for (let i = 0; i < scores.array.length; i++) {
    let team = owl.teams[i]
    rankings.push([description(team), scores.array[i]])
  }

  rankings.sort(function (a, b) {
    return b[1] - a[1]
  })

  for (let i = 0; i < rankings.length; i++) {
    let rank = leftPad(i + 1, 2)
    console.log(rank + ' ' + rankings[i][0] + ' (' + rankings[i][1] + ')')
  }
}
