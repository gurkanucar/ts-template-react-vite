import { FC, PropsWithChildren, Suspense } from "react";
import { Provider } from "react-redux";
import "@/util/tailwind.css";
import store from "@/store/store";
import RoutesProvider from "./RoutesProvider";

const AppProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Provider store={store}>
      <Suspense>
        <RoutesProvider>{children}</RoutesProvider>
      </Suspense>
    </Provider>
  );
};

export default AppProvider;
