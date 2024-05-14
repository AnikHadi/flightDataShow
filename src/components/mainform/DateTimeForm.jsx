import React from "react";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

function DateTimeForm({ form, control, id, label }) {
  const { journeyDate, flightType } = form?.getValues();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[journeyDate?.getDay()];
  return (
    <div>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      //w-[240px]
                      "w-full justify-start font-normal flex-col items-start h-[84px]",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <span className="uppercase text-sm">{label}</span>
                    <div className="flex items-center cursor-pointer text-xl font-bold">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "LLL dd, y")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </div>
                    <span>{day}</span>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <h1 className="text-center mt-4 mb-1 text-lg font-bold capitalize">
                  Select journey date
                </h1>
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date() || date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />
    </div>
  );
}

export default DateTimeForm;
