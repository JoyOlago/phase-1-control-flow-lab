let rideInFeet

function scuberGreetingForFeet(rideInFeet) {
  if (rideInFeet <= 199) {
  return 'This one is on me!';
} else if (rideInFeet > 2000 && rideInFeet < 2500 ) {
  return 'I will gladly take your thirty bucks.';
} else if (rideInFeet >2500){
  return 'No can do.'
}
}

let city = 'NYC'
function ternaryCheckCity(city){
  if (city === 'NYC') {
  return ('Ok, sounds good.');
} else if (city) {
  return 'No go.'
}
}

let tip = 'generous' 

function switchOnCharmFromTip(tip){
 if (tip === 'generous') {
  return 'Thank you so much.'
 } else if (tip === 'not as generous' ) {
  return 'Thank you.'
 } else {
  return 'Bye.'
 }
}