import Axios from "axios";
import { METHODS } from "../constant/reduxHelper";
import { SERVICE_CONSTATNT } from "../constant/ServiceConstant";

export const LogInService = (data) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.LOGIN,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((resp) => {
        return resolve(resp);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
