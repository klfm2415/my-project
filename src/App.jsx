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
      <button className="button-style">메뉴1</button>
      <button className="button-style">메뉴2</button>
      <button className="button-style">로그인</button>
      <button className="button-style inline-block md:hidden">...</button>
      <Section />
      <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
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
      </ul>
      <Footer />
    </div>
  );
};

export default App;
