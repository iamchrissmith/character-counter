function characterCounter(txt) {
  this.txt = txt,
  this.result = {},
  this.countChars = () => {
    chars = txt.split('')
    chars.forEach( (l) => {
      this.result[l] = (this.result[l] || 0) + 1
    })
    return this.result
  },
  this.printCount = () => {
    result = this.countChars()
    Object.keys(result).forEach( (letter) => {
      console.log(letter + ": " + result[letter])
    })
  }
}

module.exports = characterCounter

const charCounter = new characterCounter('I really want to work for Wingspan')
charCounter.printCount()
