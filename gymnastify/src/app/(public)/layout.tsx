import React from 'react';
import { User } from "@/component/Subscription/SubscriptionDetails/ThankYouType";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { ROUTES_PATH } from '@/utils/constant';
interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {

  return (
    <div>
      {children}
    </div>
  );
};

export default PublicLayout;