import { filterAirportName } from "./utils";
import * as fs from "fs";

export function getFlightData() {
  // Get actual Data Path
  const rootPath = __dirname.split(".");
  // const projectDir = process.cwd();
  const filePath = rootPath[0] + "public/data/LHR_CDG_ADT1_TYPE_1.txt";

  // Get flightOffer Data from text file
  const stringifyData = fs.readFileSync(filePath, "utf8");
  const { flightOffer } = JSON.parse(stringifyData);

  return flightOffer;
}
