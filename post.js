var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin@ds121456.mlab.com:21456/fsinstadb";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});
function getAllPosts(req, res) {
    //Get data from mongoDB
    var query = {};

    //POINT 4. Set sort the query by recently create_date [X]
    var sort = {create_date: -1}; // -1 is desc

    db.collection("posts").find(query).sort(sort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

function getPostsByUser(req, res) {
    // Additional 1.
}

function insertNewPosts(req, res) {
    //Insert new data to mongoDB
    var newpost = req.body;
    db.collection("posts").insertOne(newpost, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result.ops);
    });
}

module.exports = {
    // POINT 5. Export the functions [X]
    getAllPosts: getAllPosts,
    insertNewPost: insertNewPosts
};
