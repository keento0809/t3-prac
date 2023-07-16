import { type ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <div className="container mx-auto flex sm:pr-4">{children}</div>;
};
