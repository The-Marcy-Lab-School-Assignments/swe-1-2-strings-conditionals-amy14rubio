const wildlyBiasedReview = (location) => {
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
    return true;
  }
  if (location != 'NYC') {
    console.log('Yea that place is cool I guess');
    return false;
  }
};

const getWeatherReport = (temperature) => {
  let weatherReport = '';

  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  }
  if (temperature > 70 && temperature <= 90) {
    weatherReport = "It's really nice!";
  }
  if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  }

  console.log(weatherReport);
  console.log("And that's your report!");
  return weatherReport;
};

module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};