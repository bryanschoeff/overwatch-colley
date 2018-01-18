import test from 'ava'
import td from 'testdouble'

var games, got, matrix

test.beforeEach(t => {
  got = td.replace('got')
  td.when(got(td.matchers.anything(), td.matchers.anything())).thenResolve(testApiResponse)

  games = require('../games')

  matrix = {
    addGame: td.function()
  }
})

test.afterEach(t => {
  td.reset
})

test('addGames', t => {
  return games.loadGames(matrix).then(() => {
    td.verify(matrix.addGame(td.matchers.isA(Number), td.matchers.isA(Number)), { times: 2 })
    t.pass()
  })
})

let testApiResponse = {
  body: {
    data: {
      stages: [
        {},
        {
          matches: [
            {
              competitors: [
                { id: 4523 },
                { id: 4406 }
              ],
              state: 'CONCLUDED',
              winner: { id: 4523 }
            },
            {
              competitors: [
                { id: 4405 },
                { id: 4406 }
              ],
              state: 'CONCLUDED',
              winner: { id: 4406 }
            }
          ]
        },
        { matches: [] },
        { matches: [] },
        { matches: [] }
      ]
    }
  }
}
