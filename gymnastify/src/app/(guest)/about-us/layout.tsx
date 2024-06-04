import React, { ReactNode, Suspense } from 'react';


interface AboutsLayoutProps {
  children: ReactNode;
}

const AboutsLayout: React.FC<AboutsLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default AboutsLayout;