import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });
  await prisma.user.update({
    where: { email: "ahmedha258258@gmail.com" },
    data: { role: "admin" },
  });

  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (user.role !== "admin") {
    return redirect("/not-found");
  }

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <h1 className="h1 text-center">Admin Dashboard</h1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">
          Unapproved jobs:{unapprovedJobs.length}
        </h2>
        {unapprovedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-center text-lg text-muted-foreground">
            No unapproved jobs found.
          </p>
        )}
      </section>
    </main>
  );
}
