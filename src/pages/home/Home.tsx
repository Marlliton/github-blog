import { ProfileCard } from "./ProfileCard";

export function Home() {
  return (
    <div className={`flex flex-col`}>
      <ProfileCard />

      <div className="w-full max-w-6xl my-0 mx-auto pt-7">
        <div className="flex justify-between pb-3">
          <h1 className="text-2xl font-bold">Publicações</h1>
          <span className="text-base-span">
            <strong>301</strong> publicações
          </span>
        </div>

        <form>
          <input
            className={`
            w-full p-4 placeholder:text-base-label rounded-lg border border-base-border bg-base-input outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-base-border ring-offset-base-background
          `}
            type="text"
            placeholder="Buscar Projeto"
          />
        </form>
      </div>
    </div>
  );
}
