'use client';
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import CommonDialog from "@/shared/common-dialog";
import { RouterGuard } from "./routeGaurd";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <ToastContainer />
      <CommonDialog />
      <Provider store={store}>
        <RouterGuard>
          {children}
        </RouterGuard>
      </Provider>
    </>
  )
}

export default Layout;
