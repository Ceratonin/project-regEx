import { useState } from "react";
import Expression from "./components/Expression";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";

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

  const [sidebarState, setSidebarState] = useState(false);

  return (
    <div className="page">
      <Navbar sidebarState={sidebarState} setSidebarState={setSidebarState} />
      <div className="st">
        <Sidebar sidebarState={sidebarState} />
        <div className="outSide">
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
    </div>
  );
};

export default App;
