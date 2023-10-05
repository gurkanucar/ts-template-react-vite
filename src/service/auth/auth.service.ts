import { axiosBasic, axiosInstance } from "@/api/api.interceptor";
import { getAuthUrl } from "@/constant/api.config";
import { ITokens } from "@/types/auth/auth.types";

export const AuthService = {
  async login(data: unknown) {
    return axiosBasic.post<unknown>(getAuthUrl("/login"), data);
  },

  async logout() {
    return axiosInstance.post(getAuthUrl("/logout"));
  },

  async getNewTokens(data: ITokens) {
    return axiosBasic.post<unknown>(getAuthUrl("/refresh-token"), data);
  },
};
