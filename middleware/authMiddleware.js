const jwt = require("jsonwebtoken");
const User = require("../models/User"); // make sure this path is correct

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id); // fetch full user from DB
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user; // now req.user._id exists
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
