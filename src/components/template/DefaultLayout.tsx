import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div
      className={`
      flex flex-col gap-2 p-4 md:p-10
  `}
    >
      {children}
    </div>
  );
}
