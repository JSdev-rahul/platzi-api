import Axios from "axios";
import { METHODS } from "../constant/reduxHelper";
import { SERVICE_CONSTATNT } from "../constant/ServiceConstant";

export const GetProductListService = (params) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.GET_PRODUCT_LIST,
      methods: METHODS.GE,
      params
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
