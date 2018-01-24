var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },
    selectDevoured: function(cb) {
        orm.selectDevoured(function(result) {
            cb(result);
        });
    },
    selectNonDevoured: function(cb) {
        orm.selectNonDevoured(function(result) {
            cb(result);
        });
    },
    createOne: function(data, cb) {
        orm.insertOne(data, cb, function(result){
            cb(result);
        });
    },

    updateOne: function(id, data, cb) {
        orm.updateOne(id, data, function(result){
            cb(result);
        });
    }
}

module.exports = burger;

