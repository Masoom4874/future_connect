// hoc/withAuth.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if the user is authenticated
      const isAuthenticated = sessionStorage.getItem("isAuthenticated");

      if (!isAuthenticated) {
        // If not authenticated, redirect to the login page
        router.push("/");
      }
    }, [router]);

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
