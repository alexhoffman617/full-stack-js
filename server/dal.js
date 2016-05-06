var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/myDb';
var MongoClient = mongodb.MongoClient;


module.exports = function(){

    var db = connect();

    if (db === undefined) {
        console.log('Unable to connect to database.');
    }

    return db;
}

function connect() {
    return new Promise(function(resolve, reject){
        MongoClient.connect(url, function (err, db) {

            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
                reject(err);
            } else {
                //HURRAY!! We are connected. :)
                console.log('Connection established to', url);

                users = db.collection('users');

                users.updateOne({username: "Jon1"}, {$set: {username: "Jon1", password: "12345"}}, {upsert: true}, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });

                users.updateOne({username: "Jon2"}, {$set: {username: "Jon2", password: "12345"}}, {upsert: true}, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });

                resolve(db);

            }

        });
    })

}