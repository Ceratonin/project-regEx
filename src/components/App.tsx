import { useState, useMemo, useRef } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import MouseHoverContext from "../contexts/MouseHoverContext";
import { GetMatchesInfo } from "./GetMatchesInfo";
import "../styles/styles.scss";
import Expression from "./Expression";
import Navbar from "./Navbar";
import Output from "./Output";
import Input from "./Input";
import Sidebar from "./Sidebar";
import { IRenderII, IRenderE } from "../utils/types";
import useOnMouse from "./hooks/useOnMouse";

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
  }, [isHovered, isClicked, Ref]);

  // Мемоизация массива индексов и групп, так как при открытии
  // сайдбара каждый раз исполнялась функция GetMatchesInfo
  // Сделано для повышения оптимизации
  const matchInfoObj = useMemo(
    () => GetMatchesInfo(inputText, inputReg, flag),
    [inputText, inputReg, flag]
  );

  return (
    <RegExpContext.Provider value={matchInfoObj}>
      <InputTextContext.Provider value={inputText}>
        <MouseHoverContext.Provider value={hover}>
          <div className="page">
            <Navbar
              sidebarCheck={sidebarCheck}
            />
            <div className="st">
              <div className="outSide">
                {renderExpression}
                {renderInputText}
                <Output />
              </div>
              <Sidebar sidebarCheck={sidebarCheck} />
            </div>
          </div>
        </MouseHoverContext.Provider>
      </InputTextContext.Provider>
    </RegExpContext.Provider>
  );
};

export default App;
