let admin = (req,res,next) => {
    if (req.user.role === 0 ) {
        return res.send('Not authorized to modify.');
    }
    next();
};

module.exports = { admin }