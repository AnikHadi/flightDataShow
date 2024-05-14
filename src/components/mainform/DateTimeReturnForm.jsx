import React, { useEffect, useState } from "react";
import { FormControl, FormField } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn, formateDate } from "@/lib/utils";
import { addDays, format } from "date-fns";

function DateTimeReturnForm({ form, control, id, label }) {
  const [date, setDate] = useState({
    from: "",
    to: addDays(new Date(), 1),
  });

  const { journeyDate, flightType, returnDate } = form?.getValues();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[returnDate?.getDay()];

  useEffect(() => {
    setDate((prev) => {
      return {
        ...prev,
        from: journeyDate && new Date(journeyDate),
        to: journeyDate && addDays(new Date(journeyDate), 1),
      };
    });
  }, [journeyDate]);

  useEffect(() => {
    if (flightType === "round-trip") {
      if (date.from && date.to) {
        form.setValue("returnDate", date.to);
      }
    }
  }, [flightType, date, form]);

  return (
    <div>
      <Popover className="w-full">
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            disabled={!(flightType === "round-trip")}
            className={cn(
              //w-[240px]
              "w-full justify-start font-normal flex-col items-start h-[84px]",
              !date && "text-muted-foreground"
            )}
          >
            <span className="uppercase text-sm">{label}</span>
            {flightType === "round-trip" ? (
              <>
                <div className="flex items-center cursor-pointer text-xl font-bold">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {/* {format(date.from, "LLL dd, y")} -{" "} */}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </div>
                <span>{day}</span>
              </>
            ) : (
              <span className="text-sm">Save more on return flight</span>
            )}
          </Button>
        </PopoverTrigger>
        {flightType === "round-trip" && (
          <PopoverContent className="w-auto p-0" align="start">
            <h1 className="text-center mt-4 mb-1 text-lg font-bold capitalize">
              Select return date
            </h1>
            <FormField
              control={control}
              name={id}
              render={({ field }) => {
                return (
                  <Calendar
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    disabled={
                      flightType === "round-trip" &&
                      ((date) =>
                        date < new Date() || date < addDays(new Date()))
                    }
                    initialFocus
                    numberOfMonths={2}
                  />
                );
              }}
            />
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}

export default DateTimeReturnForm;
