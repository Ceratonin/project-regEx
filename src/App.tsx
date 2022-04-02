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

  let regArr: RegExpExecArray | null | RegExpExecArray[] = [];
  const arrOfRegs = [];

  if (reg !== null && String(reg) !== "/(?:)/g") {
    // eslint-disable-next-line
    while ((regArr = reg.exec(inputText))) {
      arrOfRegs.push([regArr, reg.lastIndex]);
    }
  }
  return (
    <div className="page">
      <Navbar />
      <div className="st">
        {renderExpression}
        {renderInputText}
        {inputText ? <Output arrOfMatches={arrOfRegs} text={inputText} /> : <></>}
      </div>
    </div>
  );
};

export default App;
