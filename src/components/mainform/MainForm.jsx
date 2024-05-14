"use client";
import React, { useEffect, useState } from "react";
import TravelType from "./TravelType";
import Radio from "./Radio";
import { useForm } from "react-hook-form";
import FlightLocationFrom from "./FlightLocationFrom";
import FlightLocationTo from "./FlightLocationTo";
import FlightDateDepart from "./FlightDateDepart";
import FlightDateReturn from "./FlightDateReturn";
import FlightTravelPerson from "./FlightTravelPerson";
import { getClientFlightData } from "@/lib/getClientFlightData";
import { Button } from "../ui/button";
import CustomAlert from "./CustomAlert";
import { usePathname, useRouter } from "next/navigation";
import { createQuery, createUrl } from "@/lib/utils";

export default function MainForm({ query, pathname }) {
  const [airData, setAirData] = useState([]);
  const [error, setError] = useState(false);
  const form = useForm();

  // use router
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const getAirData = async () => {
      const dt = await getClientFlightData("localhost:3000");
      setAirData(dt);
    };
    getAirData();
  }, []);

  const searchFlightHandler = () => {
    const allData = form?.getValues();

    const {
      classType,
      flightType,
      journeyDate,
      journeyFrom,
      journeyTo,
      traveler,
    } = allData;
    if (
      classType &&
      flightType &&
      journeyDate &&
      journeyFrom &&
      journeyTo &&
      traveler
    ) {
      const queryValue = `${createQuery(allData)}`;
      const current = createUrl(pathName, queryValue);
      router.push(current);
    } else {
      setError((prev) => !prev);
    }
  };

  return (
    <div className="w-[90%] flex flex-col gap-2">
      <TravelType query={query} pathname={pathname} />
      <div className="bg-gray-50 p-10 rounded-lg relative">
        <Radio form={form} />
        <div className="grid grid-cols-5 gap-4 mt-6 w-full">
          <FlightLocationFrom airData={airData?.flightOffer} form={form} />
          <FlightLocationTo airData={airData?.flightOffer} form={form} />
          <FlightDateDepart airData={airData} form={form} />
          <FlightDateReturn airData={airData} form={form} />
          <FlightTravelPerson airData={airData} form={form} />
        </div>

        <div className="flex justify-center items-center">
          <Button
            onClick={searchFlightHandler}
            className="absolute -bottom-[18px] px-10"
          >
            Search
          </Button>
        </div>
        {error && (
          <CustomAlert
            alertMessage="Please fill all fields"
            LogoIcon="AlertCircle"
            title="Error"
            alertVariant="destructive"
          />
        )}
      </div>
    </div>
  );
}
