import Header from "@/component/hoc/LayoutComponent/Header";
import Footer from "@/component/hoc/LayoutComponent/Footer";
import React from 'react';

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {

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

export default PrivateLayout;