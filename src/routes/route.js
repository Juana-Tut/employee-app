import express from 'express';
const router = express.Router();

import {} from "../controllers/controller.js";

router.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

