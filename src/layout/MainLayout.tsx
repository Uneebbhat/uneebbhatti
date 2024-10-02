import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobNav from "@/components/MobNav";
import { ModeToggle } from "@/components/mode-toggle";
import React, { FC } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-[15px]">
        <div className="flex items-center justify-end py-[15px]">
          <header className="flex items-center justify-end gap-[10px] relative z-10">
            <Header />
            <div className="block md:hidden">
              <MobNav />
            </div>
            {/* <ModeToggle /> */}
          </header>
        </div>
        <div className="min-h-screen">
          <section>{children}</section>
        </div>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
