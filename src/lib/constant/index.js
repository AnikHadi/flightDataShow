import { Building2, Plane, TramFront } from "lucide-react";

export const travelDemand = [
  {
    name: "Flight",
    route: "flight",
    icon: Plane,
  },
  {
    name: "Hotel",
    route: "hotel",
    icon: Building2,
  },
  {
    name: "Tour",
    route: "tour",
    icon: TramFront,
  },
];

export const travelType = [
  { value: "one-way", name: "One Way", id: "oneWay" },
  { value: "round-trip", name: "Round Trip", id: "roundTrip" },
  { value: "multi-city", name: "Multi City", id: "multiCity" },
];
export const classType = [
  { value: "economy", name: "Economy" },
  { value: "premium-economy", name: "Premium Economy" },
  { value: "business", name: "Business" },
];
