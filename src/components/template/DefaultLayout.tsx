import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div
      className={`
      flex flex-col gap-2 p-4 md:p-10
  `}
    >
      <Outlet />
    </div>
  );
}
