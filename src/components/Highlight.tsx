import { useContext, useMemo } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import MouseHoverContext from "../contexts/MouseHoverContext";
import { GetAllChunks } from "./GetMatchesInfo";
import "../styles/highlightStyles.scss";
import { IHoverState } from "../utils/types";

const Highlight = () => {
  const text = useContext(InputTextContext);
  const matchInfoObj = useContext(RegExpContext);

  // const { isHovered, memoizedListeners, mouseClick }:IHoverState =
  const {isHovered, memoizedListeners, mouseClick} =
    useContext(MouseHoverContext);

  const { indexes } = matchInfoObj;

  const allChunks = useMemo(() => {
    return GetAllChunks(indexes, text);
  }, [indexes, text]);

  const checkIsHover = (str: string, i: number) => {
    return Number(isHovered.index) === i / 2 ? (
      <span key={i} className="color-hover-1">
        {str}
      </span>
    ) : (
      <span>{str}</span>
    );
  };

  // Кондишинл рендер, зависящий от того, имеет ли кусок highlight:true
  return (
    <span>
      {allChunks.map((chunk, i) => {
        const { start, end, highlight } = chunk;
        const str = text.substring(start, end);

        return highlight ? (
          <span
            key={i}
            data-key={i / 2}
            className="color-output-1"
            {...memoizedListeners}
            onClick={mouseClick} // --------------------------------------------
          >
            {checkIsHover(str, i)}
          </span>
        ) : (
          <span key={i}>{str}</span>
        );
      })}
    </span>
  );
};
export default Highlight;
