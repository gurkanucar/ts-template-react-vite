import { FC } from "react";
import { useUserPage } from "./useUserPage";
import styles from "./UserPage.module.scss";

const UserPage: FC = () => {
  const { users, addUserFunc } = useUserPage();

  return (
    <div>
      <h2>UserPage</h2>
      {users.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
      <button className={styles.button} onClick={addUserFunc}>
        Add new user
      </button>
    </div>
  );
};

export default UserPage;
