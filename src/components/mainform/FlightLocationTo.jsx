import React, { useEffect, useState } from "react";
import AirportSuggestion from "./AirportSuggestion";
import { filterAirportName } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
// import { getFlightData } from "@/lib/getFlightData";

function FlightLocationTo({ form, airData }) {
  const [airportName, setAirportName] = useState("");
  // filter all airport name in flight offer file
  const airportList = filterAirportName(airData);

  useEffect(() => {
    if (airportName) {
      form.setValue("journeyTo", airportName);
    }
  }, [form, airportName]);

  return (
    // <Popover className="w-full">
    //   <PopoverTrigger asChild>
    //     <Button variant="outline" className="flex flex-col items-start h-fit ">
    //       <span className="uppercase text-sm">To</span>
    //       <div className="cursor-pointer text-xl font-bold">
    //         {/* {query?.form ? query.form : "Select"}
    //           <input {...register("arrivalFrom", { required: true })} /> */}
    //         DAC
    //       </div>
    //       <span className="w-full text-left truncate">
    //         CXB, Cox&apos;s Bazar Airport
    //       </span>
    //     </Button>
    //   </PopoverTrigger>
    //   <PopoverContent className="w-80">
    //     {/* <AirportSuggestion formType={"to"} airportList={airportList} /> */}
    //     <AirportSuggestion formType={"to"} />
    //   </PopoverContent>
    // </Popover>
    <DropdownMenu className="w-full">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-col items-start h-[84px] "
        >
          <span className="uppercase text-sm ">To</span>
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="journeyTo"
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
            CXB, Cox&apos;s Bazar Airport
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

export default FlightLocationTo;
