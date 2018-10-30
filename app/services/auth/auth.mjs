import jwt from 'express-jwt';
import config from '../../config/app';

const secret = config.secret;

let getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token'
        ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.authorization.split(' ')[1];
    }

    return null;
};

export default {
    required: jwt({
        secret       : secret,
        userProperty : 'payload',
        getToken     : getTokenFromHeader
    }),
    optional: {
        secret              : secret,
        userProperty        : 'payload',
        getToken            : getTokenFromHeader,
        credentialsRequired : false
    }
}