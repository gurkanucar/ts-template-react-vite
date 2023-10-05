import { FC, PropsWithChildren, Suspense } from "react";
import { Provider } from "react-redux";
import "@/util/tailwind.css";
import store from "@/store/store";
import RoutesProvider from "./RoutesProvider";
import LoadingSpinner from "./LoadingSpinner";

const AppProvider: FC<PropsWithChildren<unknown>> = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <RoutesProvider />
      </Suspense>
    </Provider>
  );
};

export default AppProvider;
