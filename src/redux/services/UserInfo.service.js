import Axios from "axios";
import { METHODS } from "../constant/reduxHelper";
import { SERVICE_CONSTATNT } from "../constant/ServiceConstant";

export const UserInfoService = (payload) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.USER_INFO,
      method: METHODS.GET,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
