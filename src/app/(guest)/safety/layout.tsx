import React, { ReactNode } from 'react';


interface SafetyLayoutProps {
  children: ReactNode;
}

const SafetyLayout: React.FC<SafetyLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default SafetyLayout;