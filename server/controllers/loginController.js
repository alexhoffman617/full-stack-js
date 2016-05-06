var userControllerPath = '/api/users/'
var loginService = require("../services/loginService.js")

module.exports = function(app) {
    app.get(userControllerPath + ":username/:password", function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        loginService.getUser(req.params.username, req.params.password).then(function(user){
            res.send(user);
        },function(err){
            res.setStatus(400).send(err);
        });
    });

    app.post(userControllerPath + ":username/:password", function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        loginService.addUser(req.params.username, req.params.password).then(function(user){
            res.send(user);
        },function(err){
            res.setStatus(400).send(err);
        });
    });
}
