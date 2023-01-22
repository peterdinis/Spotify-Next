import withAuth from "./ProtectedComponent";

const ProtectedRoute = (props: any) => {
    return (
        <>
            {props.children}
        </>
    )
  };
  
  export default withAuth(ProtectedRoute);