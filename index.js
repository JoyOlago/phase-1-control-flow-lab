let rideInFeet = 2500

function scuberGreetingForFeet(rideInFeet) {
  if (rideInFeet <= 400) {
  return 'This one is on me!';
} else if (rideInFeet > 2000 && rideInFeet <= 2500 ) {
  return 'I will gladly take your thirty bucks.';
} else if (rideInFeet >2500){
  return 'No can do.'
}
}
console.log(scuberGreetingForFeet(rideInFeet))

let city = 'NYC'
function ternaryCheckCity(city){
return city === 'NYC'? 'Ok, sounds good.': 'No go.'
}
console.log(ternaryCheckCity(city))

let tip = 'generous' 

function switchOnCharmFromTip(tip){
 switch(tip) {
  case tip = 'generous':
    return 'Thank you so much.';
 break;
  case (tip = 'not as generous'):
    return 'Thank you.';
 break;
   default:
    return 'Bye.';
  break
 }
}
console.log(switchOnCharmFromTip(tip))