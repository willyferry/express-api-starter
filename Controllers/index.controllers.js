const index = (req, res) => {
    res.json({
        message: 'Welcome to express-crud'
    })
}

module.exports = {
    index
}