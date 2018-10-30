import express from 'express';
import UserController from './controllers/UserController';

const route = express.Router();

export default route
    // User
    .get('/user', UserController.list)
    .get('/user/:id', UserController.itemById)
;

