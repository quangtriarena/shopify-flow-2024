const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {});
Router.get("/:topic", (req, res) => {});

module.exports = Router;
