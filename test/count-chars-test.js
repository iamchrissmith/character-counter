const assert = require('chai').assert
const characterCounter = require('../count-chars.js')

describe('counting characters in a string', () => {
  context('display character count function', () => {
    it('it can return an array with char: count for "a"', () => {
      const charCounter = new characterCounter('a')
      const result = charCounter.countChars()
      assert.isObject(result)
      assert.isNumber(result.a)
      assert.equal(result.a, 1)
    })

    it('it can handle more than one letter', () => {
      const charCounter = new characterCounter('ab')
      const result = charCounter.countChars();
      assert.equal(Object.keys(result).length, 2)
      assert.equal(result.a, 1)
      assert.equal(result.b, 1)
    })

    it('it can handle "aaabbc"', () => {
      const charCounter = new characterCounter('aaabbc')
      const result = charCounter.countChars();
      assert.equal(Object.keys(result).length, 3)
      assert.equal(result.a, 3)
      assert.equal(result.b, 2)
      assert.equal(result.c, 1)
    })

    it('it can handle "I really want to work for Wingspan"', () => {
      const charCounter = new characterCounter('I really want to work for Wingspan')
      const result = charCounter.countChars();
      assert.equal(Object.keys(result).length, 18)
      assert.equal(result[" "], 6)
      assert.equal(result.e, 1)
      assert.equal(result.r, 3)
    })
  })
})
