/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log('isUnderFive:', isUnderFive(3));

function isEvenNumber(number) {
  if (number % 2 === 0) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log('is Even Number:', isEvenNumber(2));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return 'true';
  } else {
    return 'false';
  }
}
console.log('startsWithJ:', startsWithJ('J'));

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log('isOldEnoughToDrink:', isOldEnoughToDrink(21));

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log('isOldEnoughToDrive:', isOldEnoughToDrive(15));

function isOldEnoughToDrinkAndDrive(person) {
  if (person >= 0) {
    return 'false';
  } else {
    return 'false';
  }
}
console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(44));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('categorizeAcidity: ', categorizeAcidity(-1));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('introduceWarnerBro:', introduceWarnerBro('dotdfsdfs'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'James Bond agent 007';
    case 'comedy':
      return 'Mr. Bean';
    case 'horror':
      return 'The Haunted';
    case 'drama':
      return 'The Crown';
    case 'musical':
      return 'West Side Story';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Please pick between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('recommendMovie:', recommendMovie('actionzz'));
