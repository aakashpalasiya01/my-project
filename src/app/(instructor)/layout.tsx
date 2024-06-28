import React from 'react';
import Sidebar from '@/component/hoc/LayoutComponent/Sidebar';

interface InstructorLayoutProps {
  readonly children: React.ReactNode;
}

const InstructorLayout: React.FC<InstructorLayoutProps> = ({ children }) => {
  return (
    <main className="site-wrapper">
      <Sidebar />
      <div className="main-cont-wrapper ">
        {children}
      </div>
    </main>
  )
}

export default InstructorLayout;