import Expression from "./Expression";
import Navbar from "./Navbar";
import Output from "./Output";
import Input from "./Input";

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
