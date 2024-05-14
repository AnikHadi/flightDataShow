"use client";
import FlightLocationFrom from "./FlightLocationFrom";
import FlightLocationTo from "./FlightLocationTo.jsx";
import FlightDateDepart from "./FlightDateDepart";
import FlightDateReturn from "./FlightDateReturn";
import FlightTravelPerson from "./FlightTravelPerson";
import ShowFlightList from "./ShowFlightList";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getClientFlightData } from "@/lib/getClientFlightData";
// import { getFlightData } from "@/lib/getFlightData";

function FlightSearchBar({ query }) {
  const [airData, setAirData] = useState([]);
  const form = useForm();

  useEffect(() => {
    const getAirData = async () => {
      const dt = await getClientFlightData("localhost:3000");
      setAirData(dt);
    };
    getAirData();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4 ">
      <FlightLocationFrom airData={airData} form={form} />
      <FlightLocationTo airData={airData} form={form} />
      <FlightDateDepart airData={airData} form={form} />
      <FlightDateReturn airData={airData} form={form} />
      <FlightTravelPerson airData={airData} form={form} />
    </div>
  );
}

export default FlightSearchBar;
