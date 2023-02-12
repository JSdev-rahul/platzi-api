import Axios from "axios";

import { METHODS, replaceUrl } from "../constant/reduxHelper";
import { SERVICE_CONSTATNT } from "../constant/ServiceConstant";

export const GetProductListService = (params) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.GET_PRODUCT_LIST,
      methods: METHODS.GE,
      params,
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

// category list service

export const getCategoryListService = (payload) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.CATEGORY_List,
      methods: METHODS.GET,
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

export const GetProductDetailsService = (payload) => {
 
  const { id } = payload;
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_CONSTATNT.GET_PRODUCT_DETAILS, { id }),
      methods: METHODS.GET,
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
