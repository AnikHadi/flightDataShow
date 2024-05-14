import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function InputField({ label, name, type, placeholder, ...rest }) {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default InputField;
