var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, data)=>{
        if (err) {
          res.header(404, {});
        } else {
          res.header(200, {});
          res.write(data);
        }
      })
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.json,  (err, data){

      })

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

