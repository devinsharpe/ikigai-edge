import { UserButton, auth } from "@clerk/nextjs";
import {
  ArrowRight,
  Fan,
  LayoutDashboard,
  PlusCircle,
  Settings
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="fixed top-0 inset-x-0 w-full flex items-center justify-between px-4 py-2 dark:bg-zinc-900 bg-white z-[2]">
        <Link href="/" className="p-1 rounded-xl flex items-center gap-2">
          <Fan />
          <h1 className="text-2xl font-semibold font-serif">Ikigai</h1>
        </Link>
        <div className="flex items-center gap-2">
          {!userId && (
            <>
              <Link
                href="/sign-in"
                className="text-zinc-800 dark:text-zinc-200 font-semibold dark:hover:bg-zinc-800 hover:bg-zinc-200 py-2 px-6 rounded-md flex items-center gap-2"
              >
                <span>Log In</span>
              </Link>
              <Link
                href="/sign-up"
                className="bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-800 text-white dark:hover:bg-zinc-100 hover:bg-zinc-900 py-2 px-6 rounded-md flex items-center gap-2 font-semibold"
              >
                <span>Sign Up</span>
                <ArrowRight size={20} />
              </Link>
            </>
          )}
        </div>
      </nav>
      {userId && (
        <nav className="fixed bottom-4 left-1/2 z-[2] transform -translate-x-1/2 p-1 pl-3 rounded-md border border-zinc-300 dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800 shadow-md flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <button
            type="button"
            className="py-3 px-3 flex items-center gap-2 rounded hover:bg-zinc-900"
          >
            <LayoutDashboard />
          </button>
          <button
            type="button"
            className="py-3 px-3 flex items-center gap-2 rounded hover:bg-zinc-900"
          >
            <PlusCircle />
            <span>New</span>
          </button>
          <button
            type="button"
            className="py-3 px-3 flex items-center gap-2 rounded hover:bg-zinc-900"
          >
            <Settings />
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
