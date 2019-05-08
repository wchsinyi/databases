var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, data)=>{
        console.log(err,data);
        if (err) {
          res.status(202).send(err); 
        } else {
          res.status(200).send(data);
        }
        res.end();
      })
    },  
    post: function (req, res) {
      models.messages.post(req.body,  (err, data)=>{
        if (err) {
          res.status(202).send(err) 
        } else {
          res.status(200);
          res.send('post successfully');
        }
      })
    }  
  },
  users: {
    get: function (req, res) {
      models.users.get( (err, data)=>{
        if (err) {
          res.status(202).send(err); 
        } else {
          res.status(200).send(data);
        }
      })
    },
    post: function (req, res) {
      models.users.post(req.body, (err, data)=>{
        if (err){
          res.status(201);
        } else {
          res.send(data);
        }
      })
    }
  }
};


