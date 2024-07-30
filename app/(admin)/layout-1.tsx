"use client";

import { ReactNode } from "react";
import Navbar from "@/components/global/Navbar";
import withAdminProtection from "@/hoc/withAdminProtection";
import Main from "@/components/common/Main";

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Main className="flex flex-col">
        {children ? children : "This is a Layout container. Must have children"}
      </Main>
    </div>
  );
};

export default withAdminProtection(AdminLayout);
