import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div
      className={`
      flex flex-col gap-2
  `}
    >
      {children}
    </div>
  );
}
