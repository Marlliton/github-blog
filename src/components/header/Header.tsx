import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header
      className={`
      w-full pt-16 pb-36 bg-header-background bg-cover
    `}
    >
      <img className={`my-0 mx-auto`} src={logo} alt="" />
    </header>
  );
}
