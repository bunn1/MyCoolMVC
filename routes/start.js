import express from 'express';
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('index');
    });

export default router;