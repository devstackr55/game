const gamesData = require('./game.json');

const getGamesService = async () => {
  let data = [];
  // In case, if we are calling 3rd Party API
  try {
    // To make it more realistic
    data[0] = await new Promise(resolve => {
      setTimeout(resolve(gamesData.games), 1000)
    })
  } catch(error) {
    data = [null, error];
  }
  return data;
}

module.exports = getGamesService;
