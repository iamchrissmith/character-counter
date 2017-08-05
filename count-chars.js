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
    countChars.forEach( (count) => {
      console.log(count)
    })
  }
}

module.exports = characterCounter
