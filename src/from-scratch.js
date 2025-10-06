const measureRain = (inch) => {
  if (inch === 0) {
    return 'drought';
  } else if (inch < 2) {
    return 'dry';
  } else if (inch < 4 && inch >= 2) {
    return 'average';
  } else if (inch < 6 && inch >= 4) {
    return 'rainy';
  } else {
    return 'flood';
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return 'Hiss hiss!';
  } else if (breed === 'cat' && age < 5) {
    return 'Mew mew!';
  } else if (breed === 'cat' && age >= 5) {
    return 'Meow meow!';
  } else if (breed === 'dog' && age < 5) {
    return 'Arf arf!';
  } else if (breed === 'dog' && age >= 5 && age < 10) {
    return 'Woof woof!';
  } else if (breed === 'dog' && age >= 10) {
    return 'Boof!';
  } else {
    return 'Happy birthday!';
  }
};

const funTypes = (jsType) => {
  if (typeof jsType === 'string') {
    return "That's just some text.";
  } else if (typeof jsType === 'number' && !Number.isNaN(jsType)) {
    return "That's a good number.";
  } else if (typeof jsType === 'boolean') {
    return "To bool, or not to bool?";
  } else if (typeof jsType === 'undefined') {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) {
    return "Nothing, and I did set that.";
  } else if (typeof jsType === 'object' && jsType !== null && !Array.isArray(jsType)) {
    return "Anybody got the key?";
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  } else if (Number.isNaN(jsType)) {
    return "Well, now you're just showing off.";
  }
};

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float);
  } else if (roundingSetting === 'down') {
    return Math.floor(float);
  } else if (roundingSetting === 'honest') {
    return Math.round(float);
  }
};

const formatName = (first, last) => {
  const newFirst = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  const newLast = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
  return `${newFirst} ${newLast}`;
};

const extractDomain = (email) => {
  const start = email.lastIndexOf("@");
  const end = email.length;
  return email.substring(start + 1, end);
};

const startsWithVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (str.charAt(0).toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
};

const rotate = (str, num) => {
  if (num === 0) {
    return str;
  }
  for (let i = 0; i < num; i++) {
    str = str.charAt(str.length - 1) + str.slice(0, str.length - 1);
  }
  return str;
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
