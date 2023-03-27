import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircleDots,
  GithubLogo,
} from "phosphor-react";

interface PostInfoProps {
  name: string;
  urlProject: string;
}

export function PostInfo({ name, urlProject }: PostInfoProps) {
  return (
    <div
      className={`
        flex flex-col md:flex-row bg-base-profile p-7 rounded-lg md:-mt-36
        gap-8
    `}
    >
      <div className="flex justify-between flex-col w-full">
        <div>
          <span className="flex justify-between pb-5">
            <a
              className="flex leading-none items-center gap-1 text-blue-link text-xs"
              href="/"
            >
              <CaretLeft weight="bold" size={20} /> VOLTAR
            </a>
            <a
              className="flex leading-none items-center gap-1 text-blue-link text-xs"
              href={`${urlProject}`}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <ArrowSquareOut size={20} />
            </a>
          </span>
          <h1 className="text-xl font-bold md:text-2xl">{name}</h1>
        </div>
        <div className="flex gap-2 md:gap-5 pt-5">
          <div className="flex itens-center justify-center leading-none gap-2">
            <GithubLogo size={18} weight="fill" className="text-base-label" />
            <span className="mt-[2px]">Marlltion</span>
          </div>
          <div className="flex itens-center leading-none gap-2">
            <Calendar size={18} weight="fill" className="text-base-label" />
            <span className="mt-[2px]">Há 1 dia</span>
          </div>
          <div className="flex itens-center leading-none gap-2">
            <ChatCircleDots size={18} weight="fill" className="text-base-label" />
            <span className="mt-[2px]">6</span>
          </div>
        </div>
      </div>
    </div>
  );
}
