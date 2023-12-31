const User = require("../api/model/users");
const { setError } = require("../config/error");
const { verifyToken } = require("../config/jwt");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // console.log(token);

    if (!token) {
      return next(setError(401, "You do not have permission"));
    }
    const parsedToken = token.replace("Bearer ", "");
    const isValidToken = verifyToken(parsedToken);
    const userLoggedIn = User.findById(isValidToken.id);
    userLoggedIn.password = null;
    req.user = userLoggedIn;
    next();
  } catch (err) {
    return next(setError(400, "Unable to verify authentication"));
  }
};

module.exports = { isAuthenticated };
