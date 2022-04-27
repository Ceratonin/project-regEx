import { useState } from "react";
import { RegExpContext } from "./components/contexts/RegExpContext";
import { InputTextContext } from "./components/contexts/InputTextContext";
import GetIndex from "./components/GetIndex";
import "./styles.scss";
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
}

const App = () => {
  const { renderInputText, inputText }: IRenderII = Input();
  const { renderExpression, regExp }: IRenderE = Expression();

  const [sidebarState, setSidebarState] = useState(false);

  let indexArray;

  if (GetIndex(inputText, regExp).length !== 0) {
    indexArray = GetIndex(inputText, regExp);
  }

  return (
    <RegExpContext.Provider value={indexArray}>
      <InputTextContext.Provider value={inputText}>
        <div className="page">
          <Navbar
            sidebarState={sidebarState}
            setSidebarState={setSidebarState}
          />
          <div className="st">
            <div className="outSide">
              {renderExpression}
              {renderInputText}
              <Output />
            </div>
            <Sidebar sidebarState={sidebarState} />
          </div>
        </div>
      </InputTextContext.Provider>
    </RegExpContext.Provider>
  );
};

export default App;
