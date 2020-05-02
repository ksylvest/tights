import * as React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => <input {...props} type="file" className="file-input" />;
