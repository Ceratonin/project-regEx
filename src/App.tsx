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
  regExp: RegExp | undefined;
  inputReg: string;
}

const App = () => {
  const { renderInputText, inputText }: IRenderII = Input();
  const { renderExpression, regExp, inputReg }: IRenderE = Expression();

  return (
    <div className="page">
      <Navbar />
      <div className="st">
        {renderExpression}
        {renderInputText}
        {inputText ? (
          <Output
            regExp={regExp}
            arrOfMatches={regExp}
            text={inputText}
            inputReg={inputReg}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
