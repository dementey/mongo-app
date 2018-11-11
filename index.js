

const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://admin:heroku_1534126g@ds157493.mlab.com:57493/heroku_1534126g";

mongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    const db = client.db("heroku_1534126g");

    const collection = db.collection("project");

     let user = { name: "nast" };
    collection.insertOne(user, function (err, result) {

        if (err) {
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});