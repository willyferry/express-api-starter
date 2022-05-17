const reads = async (req, res) => {
    res.json({
        message: 'Get All Users Data'
    });
}

const create = async (req, res) => {
    res.json({
        message: 'Create New User'
    })
}

const update = async (req, res) => {
    res.json({
        message: 'Update User'
    })
}

const destroy = async (req, res) => {
    res.json({
        message: 'Delete User'
    });
}

module.exports = {
    reads,
    create,
    update,
    destroy
}