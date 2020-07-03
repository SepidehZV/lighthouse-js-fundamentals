const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  if (age === 1) {
    return name + " is " + age + " year old.";
  }
  else {
    return name + " is " + age + " years old.";
  }

}
console.log(ageCalculator("Miranda", 1983, 2015));