var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
// router.get('/messages', controller.messages.get);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);

router.get('/messages', res.send('got some messages'));

router.post('/messages', res.send('post some messages'));

router.get('/users', res.send('get some users'));

router.post('/users', res.send('post some users'));

module.exports = router;

