const measureRainSwitch = (inch) => {
  switch (true) {
    case inch === 0:
      console.log('drought');
      break;
    case inch < 2:
      console.log('dry');
      break;
    case inch < 4:
      console.log('average');
      break;
    case inch < 6:
      console.log('rainy');
      break;
    default:
      console.log('flood');
  }
};

const rounderSwitch = (float, roundingSetting) => {
  switch (roundingSetting) {
    case 'up':
      return Math.ceil(float);
    case 'down':
      return Math.floor(float);
    case 'honest':
      return Math.round(float);
  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};