const express = require('express');
const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/', (req, res) => {
    return res.json('Fala dev');
});

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/like/:id', LikeController.store);

module.exports = routes;