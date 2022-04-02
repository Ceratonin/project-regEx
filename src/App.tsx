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

  let regMatch
  let regGroup 
  let regIndex
  let regInput
  let regLength
  let regArr

  if (reg !== null && String(reg) !== "/(?:)/g") {
    // eslint-disable-next-line
    while (regArr = reg.exec(inputText)) {
      [regMatch, regGroup, regIndex, regInput, regLength] = regArr
      console.log(regArr)
      console.log(reg.lastIndex)
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
