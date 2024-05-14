"use client";
import { PlaneIcon, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import debounce from "debounce";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";

// function AirportSuggestion({ formType, airportList }) {
function AirportSuggestion({ formType, form, airportList, setAirportName }) {
  const [searchAirport, setSearchAirport] = useState();
  useEffect(() => {
    setSearchAirport([...airportList]);
  }, [airportList]);

  // filter Airports by Search
  const searchInputHandler = (value) => {
    if (value) {
      const filterVal = airportList.filter((airport) =>
        airport.toLowerCase().includes(value.toLowerCase())
      );
      setSearchAirport([...filterVal]);
    } else {
      setSearchAirport([...airportList]);
    }
  };
  // debounce(fn, 600);
  const selectAirport = (value) => {
    if (value) {
      setAirportName(value);
    } else {
    }
  };

  return (
    <>
      <DropdownMenuLabel>
        <div className="flex items-center space-x-2 mt-2">
          <SearchIcon />
          <Input
            type="text"
            placeholder="Search for airports"
            className="h-7 focus-none focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(e) => searchInputHandler(e.target.value)}
          />
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <ScrollArea className="h-32  rounded-md border mx-2">
          {searchAirport?.length > 0 &&
            searchAirport.map((airport) => {
              return (
                <div
                  key={airport}
                  onClick={() => selectAirport(airport)}
                  className=" flex flex-col items-start "
                >
                  <DropdownMenuItem className="w-full cursor-pointer flex items-center">
                    <PlaneIcon className="mx-2 h-4 w-4" />
                    <span>{airport}</span>
                  </DropdownMenuItem>
                  <Separator className="" />
                </div>
              );
            })}
        </ScrollArea>
      </DropdownMenuGroup>
    </>
  );
}

export default AirportSuggestion;
