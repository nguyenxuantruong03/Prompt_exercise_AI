import { Toaster } from "react-hot-toast";

const ToasterCustom = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#363636",
          color: "#fff",
          fontSize: "14px",
          padding: "12px 16px",
        },
        success: {
          duration: 5000,
          iconTheme: {
            primary: "#4ade80",
            secondary: "#fff",
          },
          style: {
            background: "#10b981",
            color: "#fff",
          },
        },
        error: {
          duration: 6000,
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
          style: {
            background: "#ef4444",
            color: "#fff",
          },
        },
        loading: {
          iconTheme: {
            primary: "#3b82f6",
            secondary: "#fff",
          },
          style: {
            background: "#3b82f6",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default ToasterCustom;
