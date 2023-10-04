import { FC, PropsWithChildren, Suspense } from "react";
import { Provider } from "react-redux";

// Tailwind css
import "@/util/tailwind.css";
import store from "@/store/store";

const AppProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Suspense>
      <Provider store={store}>{children}</Provider>
    </Suspense>
  );
};

export default AppProvider;