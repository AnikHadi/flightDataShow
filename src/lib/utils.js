import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ReadonlyURLSearchParams } from "next/navigation";
import { format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function createUrl(pathname, params) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
}
export function paramsJoin(params) {
  let paramsJoinString = [];
  for (const key in params) {
    const value = params[key];
    paramsJoinString.push(`${key}=${value}`);
  }
  const paramsString = paramsJoinString.join("&");
  return paramsString;
}

export function createPathName(url) {
  let path = url.split("/").splice(3)[0].split("?");
  let pathName = "";

  if (path[0].length > 0) {
    pathName = path[0];
  }
  return pathName;
}

export function filterAirportName(arr) {
  const data =
    arr?.length &&
    arr.reduce((total, accumulator) => {
      const { itineraries } = accumulator;
      itineraries.forEach((itinerary) => {
        const { segments } = itinerary;
        segments.forEach((segment) => {
          const {
            departure: { iataCode },
            arrival: { iataCode: arrivalCode },
          } = segment;
          if (!total.includes(iataCode)) {
            total.push(iataCode);
          }
          if (!total.includes(arrivalCode)) {
            total.push(arrivalCode);
          }
        });
      });
      return total;
    }, []);

  return data;
}

export const travelerCount = (type, valType, setterFun) => {
  switch (type) {
    case "adult":
      switch (valType) {
        case "minus":
          setterFun((prev) => {
            return {
              ...prev,
              adult: prev.adult > 2 ? prev.adult - 1 : 1,
            };
          });
          break;
        case "plus":
          setterFun((prev) => {
            return {
              ...prev,
              adult: prev.adult + 1,
            };
          });
          break;
      }
      break;
    case "child":
      switch (valType) {
        case "minus":
          setterFun((prev) => {
            return {
              ...prev,
              child: prev.child > 0 ? prev.child - 1 : 0,
            };
          });
          break;
        case "plus":
          setterFun((prev) => {
            return {
              ...prev,
              child: prev.child + 1,
            };
          });
          break;
      }
      break;
    case "infant":
      switch (valType) {
        case "minus":
          setterFun((prev) => {
            return {
              ...prev,
              infant: prev.infant > 0 ? prev.infant - 1 : 0,
            };
          });
          break;
        case "plus":
          setterFun((prev) => {
            return {
              ...prev,
              infant: prev.infant + 1,
            };
          });
          break;
      }
      break;
  }
};

export const totalTraveler = (traveler) => {
  let total = 0;
  for (const key in traveler) {
    const value = traveler[key];
    total += value;
  }

  return total;
};

export const formateDate = (date) => {
  const formatted = format(new Date(date), "MM-dd-yyyy");
  return formatted;
};

export function createQuery(arr) {
  const singleArrDate = [];
  let value = null;
  for (const key in arr) {
    if (key === "returnDate") {
      const dateFormate = formateDate(arr[key]);
      value = dateFormate;
      const valueJoin = `${key}=${value}`;
      singleArrDate.push(valueJoin);
    } else if (key === "journeyDate") {
      const dateFormate = formateDate(arr[key]);
      value = dateFormate;
      const valueJoin = `${key}=${value}`;
      singleArrDate.push(valueJoin);
    } else {
      value = arr[key];
      const valueJoin = `${key}=${value}`;
      singleArrDate.push(valueJoin);
    }
  }
  return singleArrDate.join("&");
}

export function filterFlightData(allFlightData, departure, arrival) {
  const filterArr = [];
  if (allFlightData?.length > 0) {
    allFlightData.forEach((flight) => {
      flight.itineraries.forEach((itineraries) => {
        itineraries.segments.forEach((segment) => {
          if (segment.departure.iataCode === departure) {
            if (segment.arrival.iataCode === arrival) {
              filterArr.push(flight);
            }
          }
        });
      });
    });
  }
  return filterArr;
}
