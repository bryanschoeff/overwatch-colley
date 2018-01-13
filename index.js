let matrix = require('colley-rankings')(12)

let printer = require('./printer.js')
let games = require('./games.js')

games.addGames(matrix)

printer.print(matrix.solve())
