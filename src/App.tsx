import Expression from "./components/Expression";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import Input from "./components/Input";

interface IRenderII {
  renderInputText: JSX.Element;
  inputText: string;
}

interface IRenderE {
  renderExpression: JSX.Element;
  reg: RegExp;
}

const App = () => {
  const { renderInputText, inputText }: IRenderII = Input();
  const { renderExpression, reg }: IRenderE = Expression();

  const regItr = inputText.matchAll(reg);

  if (reg !== null && String(reg) !== "/(?:)/g") {
    // eslint-disable-next-line
    for (const regArr of regItr) {
      console.log(regArr[0]);
    }
  }
  return (
    <div className="page">
      <Navbar />
      <div className="st">
        {renderExpression}
        {renderInputText}
        {inputText ? <Output text={reg.test(inputText).toString()} /> : <></>}
      </div>
    </div>
  );
};

export default App;
