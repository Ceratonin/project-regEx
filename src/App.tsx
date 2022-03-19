import Expression from "./components/Expression";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="st">
        <Expression />
        <Input />
        <Output />
      </div>
    </div>
  );
};

export default App;
