import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  // Get the current logged-in user session from the server
  const session = await auth();

  return (
    <header className="px-5 py-5 bg-white shadow-md font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={30}
            className="rounded-full"
          />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              {/* Show 'Create' link when logged in */}
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              {/* Logout button as a server action form */}
              <form
                action={async () => {
                  "use server"; // This marks the function as a server action
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span>Logout</span>
                </button>
              </form>

              {/* Link to the logged-in user's profile */}
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            /* Login form with GitHub */
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Logiin</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
