import { UserButton, auth } from "@clerk/nextjs";
import {
  ArrowRight,
  Fan,
  LayoutDashboard,
  Menu,
  Plus,
  PlusCircle,
  Users
} from "lucide-react";
import Link from "next/link";
import React from "react";

const IkigaiIcon: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 149 149"
      className={className}
    >
      <g clipPath="url(#a)">
        <circle cx="74.25" cy="74.25" r="74.25" fill="#fff" />
        <path
          fill="url(#b)"
          d="M74.251 3C47.367 3 30.177 17.366 23.154 24.603 2.662 45.644-2.314 76.543 8.734 102.294H139.77c3.744-8.728 5.73-18.278 5.73-28.044C145.5 34.898 113.603 3 74.251 3ZM59.09 74.25c0-8.34 6.752-15.157 15.162-15.157 8.375 0 15.157 6.782 15.157 15.157 0 8.324-6.738 15.163-15.157 15.163-8.406 0-15.162-6.827-15.162-15.163Zm48.663 15.163h-9.907a27.862 27.862 0 0 0 4.449-15.163c0-15.489-12.554-28.044-28.043-28.044-15.49 0-28.042 12.554-28.042 28.044a27.864 27.864 0 0 0 4.45 15.163h-9.914a36.701 36.701 0 0 1-3.259-15.163c0-20.305 16.473-36.76 36.765-36.76 20.304 0 36.759 16.456 36.759 36.76a36.693 36.693 0 0 1-3.258 15.163Zm22.864 0h-9.083c10.299-31.836-13.587-64.81-47.282-64.81-27.413 0-49.645 22.233-49.645 49.647 0 5.116.79 10.295 2.364 15.163h-9.083c-1.343-4.95-1.997-10.162-1.997-15.163 0-32.222 26.14-58.363 58.361-58.363 32.235 0 58.362 26.128 58.362 58.363 0 4.984-.649 10.195-1.997 15.163Zm4.678 21.603a71.167 71.167 0 0 1-9.945 12.881H23.154a71.184 71.184 0 0 1-9.945-12.881h122.085Zm-20.176 21.597c-11.575 8.126-25.666 12.887-40.867 12.887-15.206 0-29.304-4.767-40.872-12.887h81.739Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="74.25"
          x2="74.25"
          y1="3"
          y2="145.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0E7490" />
          <stop offset="1" stopColor="#155E75" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h148.5v148.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Navbar: React.FC = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="fixed top-0 inset-x-0 w-full flex items-center justify-between px-4 py-2 dark:bg-zinc-900 bg-white z-[2]">
        <Link href="/" className="p-1 rounded-xl flex items-center gap-2">
          {/* <IkigaiIcon className="h-8 w-8" /> */}
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
            <Users />
          </button>
          <button
            type="button"
            className="py-3 px-3 flex items-center gap-2 rounded hover:bg-zinc-900"
          >
            <PlusCircle />
            <span>New</span>
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
