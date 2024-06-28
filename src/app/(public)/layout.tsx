import React from 'react';
import { User } from "@/component/Subscription/SubscriptionDetails/ThankYouType";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { ROUTES_PATH } from '@/utils/constant';
interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const nextCookies = cookies();
  const user = nextCookies.get("user") ? nextCookies.get("user") : null;
  const userData: User | null = user ? JSON.parse(user.value) : null;

  if (userData) {
    redirect(ROUTES_PATH.HOME)
  }
  
  return (
    <div>
      {children}
    </div>
  );
};

export default PublicLayout;