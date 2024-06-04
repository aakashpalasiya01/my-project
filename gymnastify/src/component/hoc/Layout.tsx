'use client';
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import CommonDialog from "@/shared/common-dialog";
import { RouterGuard } from "./routeGaurd";
import { Suspense, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
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
