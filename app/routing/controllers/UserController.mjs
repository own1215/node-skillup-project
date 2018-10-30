class UserController {

    list (req, res) {
        res.send('user list');
    }

    itemById (req, res) {
        res.send(`user item: ${req.params.id}`);
    }
}

export default new UserController();