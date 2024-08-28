import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";

import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    search?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ search, type, location, remote }: JobFilterValues) {
  const titlePrefix = search
    ? `${search} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { search, type, location, remote, page },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      search,
      type,
      location,
      remote: remote === "true",
    })} | Job Board`,
  };
}

export default async function Home({
  searchParams: { search, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    search,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="h1">{getTitle(filterValues)}</h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </section>
    </main>
  );
}
