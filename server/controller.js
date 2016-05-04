module.exports = function(app) {
    app.get('/api' + "/:id", function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ val: 10 }));    });
}
