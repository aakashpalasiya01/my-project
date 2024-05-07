import Header from "@/component/hoc/LayoutComponent/Header";
import Footer from "@/component/hoc/LayoutComponent/Footer";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
      <main className="site-wrapper">
        <Header />
        <div className="main-cont-wrapper ">
          {children}
        </div>
        <Footer />
      </main>
    )
  }