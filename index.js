let matrix = require('colley-rankings')(12)
let printer = require('./printer.js')
let games = require('./games.js')

games.loadGames(matrix).then(() => {
  printer.print(matrix.solve())
}).catch((error) => {
  console.log(error)
})
