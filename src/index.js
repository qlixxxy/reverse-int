module.exports = function reverse (n) {
    let str = n.toString()
    let resultString = str.split('').reverse().filter(item => (item === "-") ? false : true).join('')
    return resultString

    

  
}
