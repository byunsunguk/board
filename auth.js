const jwt = require('./helpers/jwt');

module.exports = async (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) res.status(401).end()
  if (token.indexOf('Bearer ') === 0) token = token.slice(7);
  try {
    const decoded = await jwt.verify(token);

  }
  catch(err) {

  }
}