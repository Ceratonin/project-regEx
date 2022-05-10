import { useContext, useMemo } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import MouseHoverContext from "../contexts/MouseHoverContext";
import { GetAllChunks } from "./GetMatchesInfo";
import "../styles/highlightStyles.scss";

const Highlight = () => {
  const text = useContext(InputTextContext);
  const matchInfoObj = useContext(RegExpContext);

  const { isHovered, memoizedListeners, mouseClick, isClicked, Ref } =
    useContext(MouseHoverContext);
  const { indexes } = matchInfoObj;
  
  const handleClick = () => {
    if(Ref && Ref.current)
    Ref.current.scrollIntoView({ behavior:"smooth", block: "center" });
  };

  const allChunks = useMemo(() => {
    return GetAllChunks(indexes, text);
  }, [indexes, text]);

  const checkIsHover = (str: string, i: number) => {  
    if (isClicked.index === i / 2) {
      return (
        <span key={i} className="color-clicked-1">
          {str}
        </span>
      );
    } else if (isHovered.index === i / 2) {
      return (
        <span key={i} onClick={handleClick} className="color-hovered-1">
          {str}
        </span>
      );
    }
    return <span>{str}</span>;
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
            onClick={mouseClick}
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
