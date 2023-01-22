import React from "react";
import Seo from "./Seo";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <>
        <Seo title="Spotify web-app" />
        {children}
    </>
  )
};

export default Layout;
