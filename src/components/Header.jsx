import logo from "@/assets/travel-logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-10 fixed  z-99 bg-gradient-to-t from-black/10 to-transparent">
      <div className="w-full flex items-center justify-between mx-auto py-2 ">
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" width={72} height={72} />
        </Link>
        <div className="flex items-center">
          <Link className="text-white min-w-[50px] font-medium" href="/">
            Home
          </Link>

          <SignedOut>
            <Link
              href="/sign-in"
              className="btn ml-2.5 bg-[#780bcd] text-[#fff] rounded-[25px] px-6 py-2.5 cursor-pointer border-0"
            >
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
