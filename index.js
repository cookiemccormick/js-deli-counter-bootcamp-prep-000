function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  var firstPerson = katzDeliLine.shift()
  if (katzDeliLine === 0) {
    return `There is nobody waiting to be served!`
  }
}