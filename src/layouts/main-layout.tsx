import { Navbar, Sidebar } from "../components/index";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex h-screen overflow-hidden relative">
      <Sidebar />
      <div className="w-full overflow-x-hidden absolute pl-[220px]">
        <Navbar />
        <>{children}</>
      </div>
    </main>
  );
};

export default MainLayout;
