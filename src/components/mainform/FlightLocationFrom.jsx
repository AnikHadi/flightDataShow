import React, { useEffect, useState } from "react";
import AirportSuggestion from "./AirportSuggestion";
import { filterAirportName } from "@/lib/utils";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function FlightLocationFrom({ airData, form }) {
  const [airportName, setAirportName] = useState("");
  // filter all airport name in flight offer file
  const airportList = filterAirportName(airData);

  useEffect(() => {
    if (airportName) {
      form.setValue("journeyFrom", airportName);
    }
  }, [form, airportName]);

  return (
    <DropdownMenu className="w-full">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-col items-start h-[84px] "
        >
          <span className="uppercase text-sm">Form</span>
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="journeyFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Select Location"
                        {...field}
                        className="bg-transparent border-none cursor-pointer text-xl font-bold p-0 h-fit"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <span className="w-full text-left truncate">
            Hazrat Shahjalal International Airport
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <AirportSuggestion
          formType={"form"}
          form={form}
          airportList={airportList}
          setAirportName={setAirportName}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FlightLocationFrom;
