var dbPromise = require("../dal.js")();
var collectionPromise = dbPromise.then(function(db) { return db.collection('users'); })


// Connection URL. This is where your mongodb server is running.

module.exports = {
    addUser: function(uname, pass){
        return new Promise(function(resolve, reject){
            collectionPromise.then(function(users){
                users.insert([{username: uname, password: pass}], function (err, result) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log('Inserted');
                        resolve(result);
                    }
                });
            });
        });
    },

    getUser: function(uname, pass){
        return new Promise(function(resolve, reject) {
            collectionPromise.then(function (users) {
                users.findOne({username: uname, password: pass}, function (err, result) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else if (result) {
                        console.log('Found:', result.username);
                        resolve(result);
                    } else {
                        console.log('No document(s) found with defined "find" criteria!');
                        resolve(null);
                    }
                });
            });
        });
    }
}

