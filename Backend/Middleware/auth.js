const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, process.env.SECRET_KEY);
            req.user = user;
            console.log(req.user);
        } else {
            res.status(401).json({ message: "Unauthorized User" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "error Unauthorized User" });
    }
};

module.exports = auth;