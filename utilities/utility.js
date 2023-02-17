const axios = require("axios");
const { URL, SUCCESS, FAILURE } = require("../utilities/constants");

module.exports.elancoAPI = (apiName, findBy) => {
  try {
    let result = new Promise((resolve, reject) => {
      findBy = findBy.toString() === "null" ? " " : findBy;
      axios
        .get(`${URL.baseURL}/${apiName}/${findBy}`)
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    return result
      .then((response) => {
        return {
          ...SUCCESS,
          data: response.data,
        };
      })

      .catch((error) => {
        return {
          ...FAILURE,
          error: error,
        };
      });
      
  } catch (e) {
    return {
      ...FAILURE,
      error: e,
    };
  }
};
