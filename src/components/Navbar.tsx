import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { auth, signIn } from "@/auth";
import UserButton from "./UserButton";
import getSession from "@/lib/getSession";
import ModeToggle from "./DarkMode";

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={logo} alt="Job board logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight"> Job board</span>
        </Link>
        <div className="flex items-center gap-5">
          <Button asChild>
            <Link href={"/job/new"}>Post a job</Link>
          </Button>
          {user ? <UserButton user={user} /> : <SignInButton />}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}
