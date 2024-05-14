"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { travelType } from "@/lib/constant";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

function Radio({ form }) {
  const [setType, setSetType] = useState("economy");
  const getData = form.control;
  const { journeyDate, returnDate, flightType } = getData["_fields"];

  if (travelType.length > 0) {
    return (
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="flightType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={"one-way"}
                    // defaultValue={field.value ? field.value : "one-way"}
                    value={setType ? field.value : "one-way"}
                    className="flex items-center gap-4"
                  >
                    {travelType.map((valType) => {
                      const isActive = valType.value;
                      return (
                        <FormItem
                          key={valType.value}
                          className={`${
                            isActive === (field.value ? field.value : "one-way")
                              ? "opacity-100"
                              : "opacity-30"
                          }  flex items-center gap-x-2 space-y-0`}
                        >
                          <FormControl className="h-full">
                            <RadioGroupItem
                              value={valType.value}
                              id={valType.value}
                              className="w-[18px] h-[18px] cursor-pointer text-lg accent-[#d1d3ef]"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor={valType.value}
                            className="cursor-pointer text-lg text-[#00026e] space-y-0.5"
                          >
                            {valType.name}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  }
}

export default Radio;
