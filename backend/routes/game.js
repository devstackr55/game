const express = require('express');
const args = { mergeParams: true };
const gameRouter = express.Router(args);
const gameController = require('../controllers/game');

gameRouter.route('/')
  .get(gameController.getGames)

module.exports = gameRouter;
