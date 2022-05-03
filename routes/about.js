import express from 'express';
const router = express.Router();

let obj = {user: "Flisa Hedenhös", navigationLinks: ["Start", "About", "Contact"], page: "about"};

router.route('/')
    .get((req, res) => {
        res.render('about', obj);
    });

export default router;