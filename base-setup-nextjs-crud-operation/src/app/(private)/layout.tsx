import Header from "@/component/hoc/LayoutComponent/Header";
// import Footer from "@/component/hoc/LayoutComponent/Footer";

import Sidebar from "@/component/hoc/LayoutComponent/Sidebar";
import BgAnimation from "@/shared/bg-animation";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
      <div id="main-wrapper" className="show">
        <BgAnimation />
        <main className="main-content">
          <Sidebar />
          <div className="content-wrapper">
            <Header />
            {children}
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    )
  }