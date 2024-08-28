import { Job } from "@prisma/client";
import Image from "next/image";
import companyLogo from "@/assets/company-logo.png";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

interface IProps {
  job: Job;
}
function JobListItem({
  job: {
    applicationEmail,
    applicationUrl,
    approved,
    companyLogoUrl,
    companyName,
    createdAt,
    description,
    id,
    location,
    locationType,
    salary,
    slug,
    title,
    type,
    updatedAt,
  },
}: IProps) {
  return (
    <article className="p5 flex gap-3 rounded-lg border hover:bg-muted/60">
      <Image
        className="self-center rounded-lg"
        src={companyLogoUrl || companyLogo}
        width={100}
        height={100}
        alt={`${companyName} logo`}
      />

      <div className="flex-grow space-y-3">
        <div className="">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>

          <p className="flex items-center gap-1.5">
            <MapPin size={16} className="shrink-0" />
            {locationType}
          </p>

          <p className="flex items-center gap-1.5">
            <Globe2 size={16} className="shrink-0" />
            {location || "world wide"}
          </p>
          <p className="flex items-center gap-1.5">
            <Banknote size={16} className="shrink-0" />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0" />
            {relativeDate(createdAt)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge> {type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {relativeDate(createdAt)}
        </span>
      </div>
    </article>
  );
}

export default JobListItem;
