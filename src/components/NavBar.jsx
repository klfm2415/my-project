import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

const NavBar = () => {
  return (
    <nav className="hidden md:flex gap-4">
      <Button1 />
      <Button2 />
      <Button3 />
    </nav>
  );
};

export default NavBar;
