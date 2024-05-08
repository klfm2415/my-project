import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      <Header />
      <Section />
      <CardList />
      <Footer />
    </div>
  );
};

export default App;
