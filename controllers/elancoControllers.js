const { elancoAPI } = require("../utilities/utility");
const { BAD_REQUEST } = require("../utilities/constants");

module.exports.elancoAPI = async (req, res) => {
  try {
    if (req.query.name && req.query.childName) {
      let response = await elancoAPI(req.query.name, req.query.childName);
      return res.send(response);
    } else {
      return res.send(BAD_REQUEST);
    }
  } catch (e) {
    res.send(e);
  }
};
