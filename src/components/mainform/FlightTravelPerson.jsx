import React from "react";
import TravelerClassForm from "./TravelerClassForm";
import { Form } from "../ui/form";

function FlightTravelPerson({ airData, form }) {
  return (
    <div className="w-full">
      <Form {...form}>
        <form className="">
          <TravelerClassForm form={form} />
        </form>
      </Form>
    </div>
  );
}

export default FlightTravelPerson;
