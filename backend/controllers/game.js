const getGamesService = require('../services/game/get');
const { successResponseHelper, errorResponseHelper } = require('../utils/response')

const userController = {
  getGames: async (req, res) => {
    const [response, error] = await getGamesService();
    if (response) {
      successResponseHelper(res, response);
    } else {
      errorResponseHelper(res);
    }
  }
}

module.exports = userController;
