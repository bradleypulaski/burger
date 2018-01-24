var connection = require("./connection.js");

function orm() {
    this.selectAll = function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, data) {
            if (err) throw err;
            cb(data);
          });
    }
    this.selectDevoured = function(cb) {
        connection.query("SELECT * FROM burgers WHERE devoured = 1", function(err, data) {
            if (err) throw err;
            cb(data);
          });
    }
    this.selectNonDevoured = function(cb) {
        connection.query("SELECT * FROM burgers WHERE devoured = 0", function(err, data) {
            if (err) throw err;
            cb(data);
          });
    }
    this.insertOne = function(data, cb) {
        console.log(data);
        connection.query("INSERT INTO burgers SET ?", data, function(err, result) {
            if (err) throw err;
        
            cb(result);
          });
    }
    this.updateOne = function(id, data, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [data, {id:id}], function(err, result) {
            if (err) throw err;
        
            cb(result);
          });
    }
}
var borm = new orm();
module.exports = borm;