"use client";

import React from "react";
import { Form } from "../ui/form";
import DateTimeReturnForm from "./DateTimeReturnForm";

function FlightDateReturn({ airData, form }) {
  return (
    <div className="w-full">
      <Form {...form}>
        <form className="">
          <DateTimeReturnForm
            id="returnDate"
            label="RETURN DATE"
            control={form.control}
            form={form}
          />
        </form>
      </Form>
    </div>
  );
}

export default FlightDateReturn;
