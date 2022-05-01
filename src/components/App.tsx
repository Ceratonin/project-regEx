import { useState, useMemo } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import GetMatchesInfo from "./GetMatchesInfo";
import "../styles/styles.scss";
import Expression from "./Expression";
import Navbar from "./Navbar";
import Output from "./Output";
import Input from "./Input";
import Sidebar from "./Sidebar";
import { IRenderII, IRenderE } from "../utils/types";

const App = () => {
  const { renderInputText, inputText }: IRenderII = Input();
  const { renderExpression, regExp, inputReg }: IRenderE = Expression();

  const [sidebarState, setSidebarState] = useState(false);

  // Мемоизация массива индексов и групп, так как при открытии
  // сайдбара каждый раз исполнялась функция GetMatchesInfo
  // Сделано для повышения оптимизации
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
