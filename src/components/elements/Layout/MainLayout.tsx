import { type ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="min-h-screen flex-grow border-x">{children}</main>;
};
