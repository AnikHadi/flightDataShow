"use client";
import React from "react";
import { Form } from "../ui/form";
import DateTimeForm from "./DateTimeForm";

function FlightDateDepart({ airData, form }) {
  return (
    <div className="w-full">
      <Form {...form}>
        <form className="">
          <DateTimeForm
            id="journeyDate"
            label="Journey Date"
            control={form.control}
            form={form}
          />
        </form>
      </Form>
    </div>
  );
}

export default FlightDateDepart;
