import express from 'express';
const router = express.Router();

let obj = {user: "Flisa Hedenhös", navigationLinks: ["Start", "About", "Contact"], page: "contact"};

router.route('/')
    .get((req, res) => {
        res.render('contact', obj);
    });

export default router;