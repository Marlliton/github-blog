import { Users, Buildings, GithubLogo, ArrowSquareOut } from "phosphor-react";

export function ProfileCard() {
  return (
    <div
      className={`
        w-full max-w-6xl my-0 mx-auto flex flex-col md:flex-row bg-base-profile p-7 rounded-lg md:-mt-36
        gap-8
    `}
    >
      <div
        className={`
        flex items-center justify-center
      `}
      >
        <div className="w-40 h-40 bg-red-300 rounded-xl overflow-hidden">
          <img src="https://github.com/marlliton.png" alt="Imagem de perfil do github" />
        </div>
      </div>
      <div className="flex justify-between flex-col">
        <div>
          <span className="flex justify-between">
            <h1 className="text-xl font-bold md:text-2xl md:pb-2">Marlliton Souza</h1>
            <a
              className="flex leading-none items-center gap-1 text-blue-link text-xs"
              href="https://github.com/marlliton"
            >
              GITHUB <ArrowSquareOut size={20} />
            </a>
          </span>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint accusamus
            culpa quaerat adipisci corporis magni. Repellat, sapiente.
          </h1>
        </div>
        <div className="flex gap-2 md:gap-5 pt-5">
          <div className="flex itens-center justify-center leading-none gap-2">
            <GithubLogo size={18} weight="fill" className="text-base-label" />
            <span className="mt-[2px]">Marlltion</span>
          </div>
          <div className="flex itens-center leading-none gap-2">
            <Buildings size={18} weight="fill" className="text-base-label" />
            <span className="mt-[2px]">Cod3r</span>
          </div>
          <div className="flex itens-center leading-none gap-2">
            <Users size={18} weight="fill" className="text-base-label" />
            <span className="mt-[2px]">22</span>
          </div>
        </div>
      </div>
    </div>
  );
}
