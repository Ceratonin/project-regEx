import Expression from "./components/Expression";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import Input from "./components/Input";

interface IInputRender {
  render: JSX.Element;
  value: string;
}

const App = () => {
  const { render, value }: IInputRender = Input();

  return (
    <div className="page">
      <Navbar />
      <div className="st">
        <Expression />
        {render}
        <Output text={value} />
      </div>
    </div>
  );
};

export default App;
