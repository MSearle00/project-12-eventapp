const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");
    if(!token)
        return res
            .status(401)
            .json({msg:"No authentication token, authorization denied"})

    const verifiedToken = jwt.verify(token, process.env.JWT_TOKEN)
    if (!verifiedToken)
        return res
        .status(401)
        .json({msg:"Token verification failed, authorization denied"})
    
    req.user = verifiedToken.id;
    next();


};

module.exports = auth