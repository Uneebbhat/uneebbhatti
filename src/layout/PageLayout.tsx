import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <Separator />
        {children}
      </div>
    </>
  );
};

export default PageLayout;
