import { useState, useMemo } from "react";
import RegExpContext from "./contexts/RegExpContext";
import InputTextContext from "./contexts/InputTextContext";
import GetMatchesInfo from "./components/GetMatchesInfo";
import "./styles.scss";
import Expression from "./components/Expression";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";
import { IRenderII, IRenderE } from "./utils/types";

const App = () => {
  const { renderInputText, inputText }: IRenderII = Input();
  const { renderExpression, regExp, inputReg }: IRenderE = Expression();

  const [sidebarState, setSidebarState] = useState(false);

  const matchInfoObj = useMemo(
    () => GetMatchesInfo(inputText, regExp),
    [inputText, inputReg]
  );

  // const matchInfoObj = GetMatchesInfo(inputText, regExp)

  return (
    <RegExpContext.Provider value={matchInfoObj}>
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
