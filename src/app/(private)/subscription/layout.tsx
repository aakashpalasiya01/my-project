import React, { ReactNode, Suspense } from 'react';


interface SubscriptionLayoutProps {
  children: ReactNode;
}

const SubscriptionLayout: React.FC<SubscriptionLayoutProps> = ({ children }) => {
  return (
    <Suspense>
      {children}
    </Suspense>
  )
}

export default SubscriptionLayout;