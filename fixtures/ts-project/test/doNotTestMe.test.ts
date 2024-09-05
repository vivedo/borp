import { test } from 'node:test'
import { add } from '../src/add.js'
import { strictEqual } from 'node:assert'

test('doNotTestMe', () => {
  strictEqual(add(1, 2), 3)
})
