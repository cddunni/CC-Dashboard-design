import { Navbar, Sidebar } from "../components/index";
import { ReactNode, useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  console.log(mobileMenuOpen)

  return (
    <main className="flex h-screen overflow-hidden relative">
      <Sidebar className="border-black border-r-[1.5px] hidden lg:block w-[220px]"/>

      <div className="w-full flex flex-col absolute lg:pl-[220px] h-full">
        <Navbar toggleMobileMenu={toggleMobileMenu} isMobileSideBarOpen={mobileMenuOpen}/>
        <div className="flex-1 overflow-y-auto md:px-6 px-4 lg:pb-0 pb-6">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
