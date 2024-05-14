import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { classType } from "@/lib/constant";
import { Input } from "../ui/input";
import { totalTraveler, travelerCount } from "@/lib/utils";

function TravelerClassForm({ form }) {
  const [traveler, setTraveler] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });
  const [setType, setSetType] = useState("economy");
  const getData = form.control;
  const { journeyDate, returnDate, flightType } = getData["_fields"];

  // Control All Traveler Count
  const handleTraveler = (type, valType) => {
    travelerCount(type, valType, setTraveler);
  };

  // Get Total Traveler Count
  const total = totalTraveler(traveler);

  useEffect(() => {
    form.setValue("traveler", total);
    // form.setValue("classType", setType);
  }, [form, total]);

  return (
    <Popover className="w-full">
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-col items-start h-[84px] w-full"
        >
          <span className="uppercase text-sm">TRAVELER, CLASS</span>
          <div className="flex items-center cursor-pointer text-xl font-bold ">
            <FormField
              control={form.control}
              name="traveler"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-6 p-0 text-xl h-fit bg-transparent border-none  ring-offset-background file:border-none file:bg-transparent   focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      readOnly={true}
                      value={total}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span>Travelers</span>
          </div>
          <span className="capitalize">{setType}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span>Adults</span>
            <span className="text-xs">12 years and above</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MinusCircleIcon onClick={() => handleTraveler("adult", "minus")} />
            <span>{traveler.adult}</span>
            <PlusCircleIcon onClick={() => handleTraveler("adult", "plus")} />
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span>Children</span>
            <span className="text-xs">2-11 years</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MinusCircleIcon onClick={() => handleTraveler("child", "minus")} />
            <span>{traveler.child}</span>
            <PlusCircleIcon onClick={() => handleTraveler("child", "plus")} />
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span>Infant</span>
            <span className="text-xs">Below 2 years</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MinusCircleIcon
              onClick={() => handleTraveler("infant", "minus")}
            />
            <span>{traveler.infant}</span>
            <PlusCircleIcon onClick={() => handleTraveler("infant", "plus")} />
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex flex-col ">
          <span>Class</span>

          <FormField
            control={form.control}
            name="classType"
            render={({ field }) => {
              setSetType(field.value);
              return (
                <FormItem className="space-y-0">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={"economy"}
                      // defaultChecked={field.checked ? field.checked : "economy"}
                      value={setType ? field.value : "economy"}
                      className="flex items-center gap-0 gap-x-2"
                    >
                      {classType.map((valType) => {
                        const isActive = valType.value;
                        return (
                          <FormItem
                            key={valType.value}
                            className={`${
                              isActive ===
                              (field.value ? field.value : "economy")
                                ? "opacity-100"
                                : "opacity-30"
                            }  flex items-center gap-x-2 space-y-0`}
                          >
                            <FormControl className="h-full">
                              <RadioGroupItem
                                value={valType.value}
                                id={valType.value}
                                className="w-[13px] h-[13px] cursor-pointer text-sm accent-[#d1d3ef]"
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor={valType.value}
                              className="w-full cursor-pointer text-sm text-[#00026e] text-nowrap flex flex-wrap"
                            >
                              {valType.name}
                            </FormLabel>
                          </FormItem>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>

        <div className="flex justify-end mt-5">
          <Button className="bg-[#eec02b] hover:bg-[#ca9e0b]">Done</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default TravelerClassForm;
