import React from "react";

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default Layout;
