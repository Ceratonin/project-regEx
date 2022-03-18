import Expression from "./components/Expression";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import Text from "./components/Text";

const App = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="st">
        <Expression />
        <Text />
        <Output />
      </div>
    </div>
  );
};

export default App;
