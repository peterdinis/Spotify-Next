import React from "react";
import Seo from "./Seo";

interface IProps {
    children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({children}: IProps) => {
    return (
        <>
          <Seo />
          {children}
        </>
    )
}


export default Layout;