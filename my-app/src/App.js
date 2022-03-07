import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter.js";
import User from "./components/User.js";
import Content from "./components/Content";
import Footer from "./components/Footer";
import HeroSpesification from "./components/Hero.js";

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
      <User />
      <hr />
      <Counter />
      <hr />
      <HeroSpesification />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
