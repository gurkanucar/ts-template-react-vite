import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useSelector";
//import { userActions } from "@/store/user/user.slice";
//import { useDispatch } from "react-redux";

export const useUserPage = () => {
  const users = useTypedSelector((state) => state.users);

  const { addUser } = useActions();

  //  const dispatch = useDispatch();

  const createRandomUser = {
    email: "mail",
    id: Math.random().toString(),
    name: "name",
  };

  const addUserFunc = () => {
    //  dispatch(userActions.addUser(createRandomUser));
    addUser(createRandomUser);
  };

  return { users, addUserFunc };
};
