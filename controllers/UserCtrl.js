var User = require('./../models/User');

module.exports = {
    create: function(req, res) {
        User.create(req.body, function(err, resp) {
            if (err) return res.sendStatus(500);
                return res.send(resp);
        });
    }
}
