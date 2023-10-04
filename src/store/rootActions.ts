import { userActions } from "@/store/user/user.slice";
import { authActions } from "@/store/auth/auth.slice";

export const rootActions = {
  ...userActions,
  ...authActions,
};
