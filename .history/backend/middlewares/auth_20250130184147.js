/*const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    const { token } = req.headers.authorization

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized ,Login again' })
    }
    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.id) {
            req.body.user_id = tokenDecode.id
        } else {
            return res.json({ success: false, message: 'Not Authorized ,Login again' })

        }
        next()


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
module.exports = userAuth*/
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login again" });
        }

        const token = authHeader.split(" ")[1]; // Extract token from "Bearer <TOKEN>"

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.id) {
            return res.status(401).json({ success: false, message: "Invalid Token, Login again" });
        }

        req.user = { id: decoded.id }; // Attach user info to `req.user` instead of `req.body`

        next(); // Proceed to the next middleware

    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

module.exports = userAuth;