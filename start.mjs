import config from './app/config/app';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import route from './app/routing';
import {error404, error500} from './app/routing/middlewares/errorHandlers';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('app/view'));
app.set('view engine', 'ejs');

app.use('/', route);

app.use(error404);
app.use(error500);

app.listen(config.port, () => console.log(`App running port: ${config.port}`));
