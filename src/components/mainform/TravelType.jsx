import { travelDemand } from "@/lib/constant";
import { createUrl, paramsJoin } from "@/lib/utils";
import Link from "next/link";

import React from "react";

function TravelType({ query, pathname }) {
  const { demand, type } = query || {};
  const joinQuery = paramsJoin(query);

  if (travelDemand.length > 0) {
    return (
      <div className="flex gap-2 bg-gray-100 p-6 rounded-lg">
        {travelDemand.map((item) => {
          const icon = <item.icon />;
          const isActive = item.route;
          const demandSearchParams = new URLSearchParams(joinQuery);
          demandSearchParams.set("demand", item.route);
          const current = createUrl(pathname, demandSearchParams);
          return (
            <Link
              href={current}
              key={item.route}
              className={`${
                demand === isActive && " border-b-blue-500 text-blue-500"
              } flex items-center gap-1 py-2 px-3 bg-gray-200 rounded-md text-xl border-2`}
            >
              {icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default TravelType;
