export let error404 = (req, res, next) => {
    const err = new Error('Page not found.');
    err.status = 404;
    next(err);
};

export let error500 = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: {},
        }
    })
};