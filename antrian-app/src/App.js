import "./App.css";
import Content from "./component/Content";
import Header from "./component/Header";
import Output from "./component/Output";

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
      <Output />
    </div>
  );
}

export default App;
