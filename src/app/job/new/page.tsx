import { Metadata } from "next";
import NewJobForm from "./NewJobForm";
import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Post a new job",
  description: "Create a new job listing",
};
async function page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/job/new");
  }
  return <NewJobForm />;
}

export default page;
