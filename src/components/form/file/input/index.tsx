import React from "react";

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactNode;
  }
> = (props) => <input {...props} type="file" className="file-input" />;
