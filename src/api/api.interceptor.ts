import axios from "axios";
import Cookies from "js-cookie";

import { getContentType } from "./api.helper";
import { API_URL } from "@/constant/api.config";
import {
  removeTokensFromStorage,
  saveUserToStorage,
} from "@/service/auth/auth.helper";
import { ITokens } from "@/types/auth/auth.types";
import { AuthService } from "@/service/auth/auth.service";

// axios instance without token
export const axiosBasic = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

// axios instance with token
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

// token ile requestler için
axiosInstance.interceptors.request.use((config) => {
  // tokenı al
  const accessToken = Cookies.get("accessToken");

  // header ile token var ise
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  // configi dönndür

  return config;
});

//? response da sadece configi değil , erroru da almalıyız

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    if (error.response && error.response.status === 401 && !config._retry) {
      config._retry = true;
      try {
        const requestData = {
          accessToken: Cookies.get("accessToken"),
          refreshToken: Cookies.get("refreshToken"),
        };
        const response = await AuthService.getNewTokens(requestData as ITokens);
        if (response && response.status === 200) {
          removeTokensFromStorage();
          //  saveUserToStorage(response.data.content);
          return axiosInstance(config);
        }
      } catch (err) {
        console.error("Error refreshing token:", err);
        //  await removeTokensFromStorage();
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);
