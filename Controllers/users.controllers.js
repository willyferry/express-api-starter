const User = require("../Models/users");

const reads = async (req, res) => {
    const users = await User.find();
    
    res.json({
        message: 'Get All Users Data',
        data: users
    });
}

const create = async (req, res) => {
    const user = await new User({
        name: req.body.name,
        email: req.body.email,
    });

    await user.save(function(err, data) {
        if (err) {
            res.json({
                message: 'Failed to create user: ' + err,
                error: err
            });
        } else {
            res.json({
                message: 'Success create user',
                data: data
            });
        }
    });
}

const update = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
    });

    res.json({
        message: 'Success update user',
        data: user
    });
}

const destroy = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    res.json({
        message: 'Success delete user',
        data: user  
    });
}

module.exports = {
    reads,
    create,
    update,
    destroy
}