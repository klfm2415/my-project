import ButtonMore from "./ButtonMore";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-blue-100 px-2 py-4 flex justify-between">
      <Logo />
      <NavBar />
      <ButtonMore />
    </header>
  );
};

export default Header;
