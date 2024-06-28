import Header from "@/component/hoc/LayoutComponent/Header";
import Footer from "@/component/hoc/LayoutComponent/Footer";
import React from 'react';
import { User } from "@/component/Subscription/SubscriptionDetails/ThankYouType";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { ROUTES_PATH } from '@/utils/constant';

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const nextCookies = cookies();
  const user = nextCookies.get("user") ? nextCookies.get("user") : null;
  const userData: User | null = user ? JSON.parse(user.value) : null;

  if (!userData) {
    redirect(ROUTES_PATH.GUEST)
  }

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