import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import ButtonMore from "./components/ButtonMore";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      <Header />
      <Logo />
      <NavBar />
      <Button1 />
      <Button2 />
      <Button3 />
      <ButtonMore />
      <Section />
      <CardList />
      {/* 카드 */}
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <li className="bg-blue-100 w-44 h-60">card</li>
      <Footer />
    </div>
  );
};

export default App;
