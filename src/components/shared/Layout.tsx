import React from "react";
import Navbar from "./Navbar";
import Seo from "./Seo";

interface IProps {
    children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({children}: IProps) => {
    return (
        <>
          <Seo />
          <Navbar />
          {children}
        </>
    )
}


export default Layout;