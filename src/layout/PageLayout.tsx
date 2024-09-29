import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  emoji: string;
}

const PageLayout: FC<PageLayoutProps> = ({ title, emoji, children }) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">
          {title}
          {emoji}
        </h2>
        <Separator className="my-4" />
        {children}
      </div>
    </>
  );
};

export default PageLayout;
