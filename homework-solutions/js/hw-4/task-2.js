const MIN_AGE = 18;
const MAX_AGE = 60;
let age = 61;
if (typeof age !== 'number') {
  console.log('Incorrect data type');
} else if (age < MIN_AGE) {
  console.log(`You don't have access cause your age is ${age}. It's less than ${MIN_AGE}`);
} else if (age >= MIN_AGE && age < MAX_AGE) {
  console.log('Welcome!');
} else if (age > MAX_AGE) {
  console.log('Keep calm and look Culture channel');
} else {
  console.log('Technical work');
}
