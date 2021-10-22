const game = require('./game');

const initRoutes = (app) => {
  app.use('/games', game);
}

module.exports = initRoutes;
