import test from 'ava'
import sinon from 'sinon'

let printer = require('../printer')

test.beforeEach(t => {
  t.context.log = sinon.spy(console, 'log')
})

test('print', t => {
  let scores = {
    array: [42, 12]
  }

  printer.print(scores)

  t.true(t.context.log.calledTwice)
  t.is(' 1  [Pacific] Dallas Fuel (42)', t.context.log.getCall(0).args[0])
  t.is(' 2  [Pacific] Los Angeles Gladiators (12)', t.context.log.getCall(1).args[0])
})
