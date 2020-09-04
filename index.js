secondHand = document.querySelector('.second-hand')
minuteHand = document.querySelector('.min-hand')
hourHand = document.querySelector('.hour-hand')
function setDate(){
  const now = new Date()

  const seconds = now.getSeconds()
  const degSeconds = seconds*6
  secondHand.style.transform = `rotate(${degSeconds + 90}deg)`

  const minutes = now.getMinutes()
  const degMinutes = minutes*6
  minuteHand.style.transform = `rotate(${degMinutes + 90}deg)`

  const hours = now.getHours()
  const degHours = hours*30
  hourHand.style.transform = `rotate(${degHours + 90}deg)`

}
setInterval(setDate, 1000);