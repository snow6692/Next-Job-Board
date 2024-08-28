import React from "react";

interface IProps {
  children: React.ReactNode;
}
function Badge({ children }: IProps) {
  return (
    <span className="mt-2 rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export default Badge;
