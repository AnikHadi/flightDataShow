import React from "react";
import { headers } from "next/headers";
import { createPathName } from "@/lib/utils";

async function Hello() {
  const headersList = headers();
  const jsonHeadersList = await JSON.parse(JSON.stringify(headersList));
  const url = headersList.get("x-clerk-clerk-url") || "";
  const pathname = createPathName(url);

  const projectDir = process.cwd();

  return (
    <div className="text-gray-300">
      <h1>{JSON.stringify(pathname)}</h1>
    </div>
  );
}

export default Hello;
