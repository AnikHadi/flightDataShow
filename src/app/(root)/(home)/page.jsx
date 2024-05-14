import Header from "@/components/Header";
import ShowFlightDate from "@/components/ShowFlightDate";
import MainForm from "@/components/mainform/MainForm";
import { createPathName } from "@/lib/utils";
import { headers } from "next/headers";

let airData = {};
export default async function Home({ params, searchParams }) {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const url = headersList.get("x-clerk-clerk-url") || "";
  const pathname = createPathName(url);

  let fetchData = async () => {
    const res = await fetch(`http://${domain}/data/LHR_CDG_ADT1_TYPE_1.txt`);
    const data = await res.json();
    airData = { ...data };
  };
  fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <Header />
      <h1 className="mt-24 text-center text-[80px] font-extrabold leading-[80px] p-2.5 text-transparent bg-gradient-to-t  to-orange-400 from-lime-400 bg-clip-text">
        It’s more than <br /> just a trip
      </h1>
      <MainForm query={searchParams} pathname={pathname} />

      <ShowFlightDate
        query={searchParams}
        pathname={pathname}
        airData={airData}
      />
    </main>
  );
}
