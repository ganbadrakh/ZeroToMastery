// ternary operator: condition ? expr1 : expr2;
function isUserValid(bool) {
  return bool;
}

const answer = isUserValid(true) ? 'You may enter' : 'Access denied';

const automatedAnswer = `Your account # is ${isUserValid(true) ? '1234' : 'not available'}`;

// switch-case
function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case 'forward': whatHappens = 'you encounter a monster';
      break;
    case 'back': whatHappens = 'you arrived home';
      break;
    case 'right': whatHappens = 'you found a river';
      break;
    case 'left': whatHappens = 'you run into a troll';
      break;
    default: whatHappens = 'please enter a valid direction';
  }
  return whatHappens;
}
