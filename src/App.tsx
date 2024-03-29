import { useState, useMemo, useRef } from "react";
import MatchInfoArrContext from "./contexts/MatchInfoArrContext";
import InputTextContext from "./contexts/InputTextContext";
import MouseHoverContext from "./contexts/MouseHoverContext";
import regExpressionContext from "./contexts/regExpressionContext";
import { GetMatchesInfo, regExpCreate } from "./components/GetMatchesInfo";
import Expression from "./components/Expression/Expression";
import Navbar from "./components/Navbar/Navbar";
import Output from "./components/Output/Output";
import Input from "./components/InputText/InputText";
import Sidebar from "./components/Sidebar/Sidebar";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";
import useOnMouse from "./hooks/useOnMouse";
import { IRenderII, IRenderE } from "./utils/types";

const App = () => {
  const { renderInputText, inputText }: IRenderII = Input();
  const { renderExpression, inputReg, flag }: IRenderE = Expression();

  const sidebarCheck = useState(false);
  const { isHovered, memoizedListeners, mouseClick, isClicked } = useOnMouse();

  const Ref = useRef<null | HTMLSpanElement>(null);

  const hover = useMemo(() => {
    return {
      isHovered,
      memoizedListeners,
      mouseClick,
      isClicked,
      Ref,
    };
  }, [isHovered, isClicked, Ref, memoizedListeners, mouseClick]);

  const regExpression = regExpCreate(inputReg, flag);

  // Мемоизация массива индексов и групп, так как при открытии
  // сайдбара каждый раз исполнялась функция GetMatchesInfo
  // Сделано для повышения оптимизации
  const matchInfoArr = useMemo(
    () => GetMatchesInfo(inputText, inputReg, flag),
    [inputText, inputReg, flag]
  );

  return (
    <MatchInfoArrContext.Provider value={matchInfoArr}>
      <InputTextContext.Provider value={inputText}>
        <MouseHoverContext.Provider value={hover}>
          <regExpressionContext.Provider value={regExpression}>
            <div className="page">
              <Navbar sidebarCheck={sidebarCheck} />
              <div className="st">
                <div className="outSide">
                  {renderExpression}
                  {renderInputText}
                  <Tabs>
                    <Tab tabtitle="Совпадения">
                      <Output tabItem="Highlight" />
                    </Tab>
                    <Tab tabtitle="Замена">
                      <Output tabItem="Replace" />
                    </Tab>
                  </Tabs>
                </div>
                <Sidebar sidebarCheck={sidebarCheck} />
              </div>
            </div>
          </regExpressionContext.Provider>
        </MouseHoverContext.Provider>
      </InputTextContext.Provider>
    </MatchInfoArrContext.Provider>
  );
};

export default App;
