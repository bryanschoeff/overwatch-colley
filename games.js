let owl = require('./owl.js')

exports.addGames = function (C) {
  // 2018-01-10
  C.addGame(owl.valiant, owl.shock)
  C.addGame(owl.gladiators, owl.dragons)
  C.addGame(owl.dynasty, owl.fuel)

  // 2018-01-11
  C.addGame(owl.spitfire, owl.mayhem)
  C.addGame(owl.fusion, owl.outlaws)
  C.addGame(owl.excelsior, owl.uprising)

  // 2018-01-12
  C.addGame(owl.valiant, owl.fuel)
  C.addGame(owl.uprising, owl.mayhem)
  C.addGame(owl.shock, owl.dragons)

  // 2018-01-13
  C.addGame(owl.spitfire, owl.fusion)
  C.addGame(owl.excelsior, owl.outlaws)
  C.addGame(owl.dynasty, owl.gladiators)
}
