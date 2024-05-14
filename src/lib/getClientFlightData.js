"use client";

export function getClientFlightData(domain) {
  const getData = async () => {
    const res = await fetch(`http://${domain}/data/LHR_CDG_ADT1_TYPE_1.txt`);
    const data = await res.json();
    return data;
  };

  return getData();
}
