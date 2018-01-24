var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var appDir = path.dirname(require.main.filename);

router.use(function (req, resp, next) {
    next();
});

router.get("/", function (req, res) {
    burger.selectDevoured(function (result) {
        var devoured = result;
        burger.selectNonDevoured(function (result) {
            return res.render("index", { devoured: devoured, nondevoured: result });
        });
    });
});

router.post("/getAll", function (req, res) {
    burger.selectAll(function (result) {
        return res.json(result);
    });
});

router.post("/create", function (req, res) {
    var data = req.body;
    burger.createOne(data, function (result) {
        return res.json(result.insertId);
    });
});

router.post("/update/:id", function (req, res) {
    var id = req.params.id;
    var data = req.body;
    burger.updateOne(id, data, function (result) {
        return res.json(result);
    });
});

module.exports = router;