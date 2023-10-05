import Cookies from "js-cookie";

import { ITokens } from "@/types/auth/auth.types";

/* save token to Storage */
/* cookie için özel kütüphane kullanıldı : js-cookie */

export const saveTokensToStorage = (data: ITokens) => {
  Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken);
};

/* save user to localeStorage */

export const saveUserToStorage = (data: any) => {
  saveTokensToStorage(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};

/* remove token from Storage */

export const removeTokensFromStorage = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
