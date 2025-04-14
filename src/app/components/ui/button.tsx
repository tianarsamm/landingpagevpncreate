// components/ui/button.tsx
import React from "react";

const Button = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
