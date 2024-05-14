import React from "react";
import { AlertCircle, TriangleAlert, CircleCheckBig } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function CustomAlert({ alertMessage, LogoIcon, title, alertVariant }) {
  const logo = <LogoIcon className="h-4 w-4" />;
  return (
    <Alert variant={alertVariant} className="w-80 mx-auto mt-5">
      {logo}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{alertMessage}.</AlertDescription>
    </Alert>
  );
}

export default CustomAlert;
