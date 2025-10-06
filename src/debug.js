const coolnessGauge = (numOfFridges) => {
  return numOfFridges < 4 ? 'You need more fridges.' : 'You are downright chilly!';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    return 'No pops? Maybe try one.';
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    return 'Only a few? Keep having fun!';
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    return 'You have a problem.';
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    return 'You need help!';
  } else {
    return 'You need an intervention!!!';
  }
};

const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return 'Zero';
  }
  return num > 0 ? 'Positive' : 'Negative';
};

module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};