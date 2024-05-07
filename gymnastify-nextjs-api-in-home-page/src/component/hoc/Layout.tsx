'use client';
// import { store } from "@/store/store";
import store  from '@/mystore/store'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import CommonDialog from "@/shared/common-dialog";
import { RouterGuard } from "./routeGaurd";
import { Suspense } from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <ToastContainer />
      <CommonDialog />
      <Provider store={store}>
        <Suspense>
          <RouterGuard>
            {children}
          </RouterGuard>
        </Suspense>
      </Provider>
    </>
  )
}

export default Layout;
