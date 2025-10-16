import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold heading">404</h1>
        <p className="mb-4 text-xl subtitle">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-hover underline transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;