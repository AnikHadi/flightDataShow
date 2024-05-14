import { getFlightData } from "@/lib/getFlightData";
import React from "react";
import FlightDataTable from "./FlightDataTable";

function ShowFlightDate({ query, pathname }) {
  const airData = getFlightData();
  return (
    <div className="text-gray-800 my-10 w-[90%] mx-auto bg-white rounded-lg">
      <div className=" w-full rounded-md ">
        <FlightDataTable query={query} airData={airData} />
        <div className="flex items-center justify-center mx-auto text-xl font-bold mt-8 mb-6">
          Message for The Customer
        </div>
      </div>
    </div>
  );
}

export default ShowFlightDate;
