import React from "react";

import { filterFlightData } from "@/lib/utils";

function FlightDataTable({ query, airData }) {
  const {
    flightType,
    journeyFrom,
    journeyTo,
    journeyDate,
    traveler,
    returnDate,
    classType,
  } = query;

  let filterFlightArrData = [];

  if (!journeyFrom && !journeyTo) {
    filterFlightArrData = airData;
  } else
    filterFlightArrData = filterFlightData(airData, journeyFrom, journeyTo);

  return filterFlightArrData.length > 0 ? (
    <div className="table w-full rounded-md">
      <div className="table-head grid grid-cols-9 mt-4 bg-[#eee] py-2 text-xl font-bold">
        <span className="text-center">Flight</span>
        <span className="text-center">Aircraft</span>
        <span className="text-center">Class</span>
        <span className="text-center">Fare</span>
        <span className="text-center">Route</span>
        <span className="text-center">Departure</span>
        <span className="text-center">Arrival</span>
        <span className="text-center">Duration</span>
        <span className="text-center">Price</span>
      </div>
      <div className="table-body">
        <div>
          {filterFlightArrData.length > 0 &&
            filterFlightArrData.map((flight, i) => {
              const {
                class: flightCla,
                fareBasis,
                itineraries,
                price,
              } = flight;
              const { segments, duration } = itineraries[0];

              const arrayDuration = duration.split(" ");
              const flightClass = flightCla[0];
              const fare = fareBasis[0];

              return (
                <div key={i} className="eventData py-2">
                  {segments.length > 0 &&
                    segments.map((segment, index) => {
                      const {
                        departure,
                        arrival,
                        carrierCode,
                        flightNumber,
                        aircraft,
                      } = segment;

                      return (
                        <div key={index} className=" grid grid-cols-9 text-sm">
                          <span className="text-center">{`${carrierCode} ${flightNumber}`}</span>
                          <span className="text-center">{aircraft}</span>
                          <span className="text-center">
                            {flightClass[index]}
                          </span>
                          <span className="text-center">{fare[index]}</span>
                          <span className="text-center ">{`${departure.iataCode} - ${arrival.iataCode}`}</span>
                          <span className="text-center text-xs">
                            {departure.at}
                          </span>
                          <span className="text-center text-xs">
                            {arrival.at}
                          </span>
                          <span className="text-center">
                            {arrayDuration[index]}
                          </span>
                          {index < 1 ? (
                            <span className="text-center">{price}</span>
                          ) : (
                            index === 1 && (
                              <span className=" w-fit px-4 py-0.5 cursor-pointer mx-auto rounded text-center bg-blue-900 text-white ">
                                Select
                              </span>
                            )
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center my-10 rounded-lg">
      <h1 className="text-2xl font-bold">No Data Found!</h1>
    </div>
  );
}

export default FlightDataTable;
