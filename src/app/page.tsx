import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <p>hello world</p>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
