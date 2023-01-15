import React from "react";

interface IProps {
    children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({children}: IProps) => {
    return (
        <>
          {children}
        </>
    )
}


export default Layout;