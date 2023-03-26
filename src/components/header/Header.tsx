import { GithubLogo } from "phosphor-react";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header
      className={`
      w-full pt-6 md:pt-16 md:pb-36 md:bg-header-background md:bg-no-repeat md:bg-cover md:bg-center  
    `}
    >
      <div className="flex justify-between md:justify-center items-center px-4">
        <img className={`w-20 md:w-auto`} src={logo} alt="" />
        <a
          className="md:hidden text-base-label hover:bg-base-span p-1 rounded-full transition-colors"
          href="https://github.com/marlliton"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo weight="fill" size={24} />
        </a>
      </div>
    </header>
  );
}
