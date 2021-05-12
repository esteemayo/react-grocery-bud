import { useEffect } from "react";

const Alert = ({ type, msg, hideAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideAlert, list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
