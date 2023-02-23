import Axios from "axios";
import { METHODS, replaceUrl } from "../constant/reduxHelper";
import { SERVICE_CONSTATNT } from "../constant/ServiceConstant";

export const GetUsersService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.GET_USERS,
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

// ? create new user

export const CreateUserService = (data) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_CONSTATNT.CREATE_USER,
      method: METHODS.POST,
      data,
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

export const DeleteUserService = (payload) => {
  const { id } = payload;
  console.log("id", id);
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_CONSTATNT.DELETE_USER, { id }),
      method: METHODS.DELETE,
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

export const GetUserDetailsService = (payload) => {
  const {id}=payload
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_CONSTATNT.GET_USER_DETAILS, { id }),
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
