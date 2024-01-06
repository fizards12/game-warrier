import React, { useEffect, useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState("");
  useEffect(() => {
    const componentDidCatch = (err, errorInfo) => {
      console.error("Error:", err, errorInfo);
      setError(errorInfo);
    };
    const errorListener = window.addEventListener("error", componentDidCatch);
    return () => window.removeEventListener("error", componentDidCatch);
  }, []);
  return !error ? <>{children}</> : <div>ErrorBoundary</div>;
};

export default ErrorBoundary;
