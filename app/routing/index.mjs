import express from 'express';
import api from './api';

const route = express.Router();

export default route
    .use('/api', api)
    .all(/^(?!\/api).*$/, (req, res) => {
        res.render('index');
    })
;
