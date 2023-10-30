import { ReactChildrenType } from "@/types/types";
import React from "react";

const Layout = ({ children }: ReactChildrenType) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
