import { useContext, useEffect, useMemo } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import MouseHoverContext from "../contexts/MouseHoverContext";
import { GetAllChunks } from "./GetMatchesInfo";
import "../styles/highlightStyles.scss";

const Highlight = () => {
  const hoverState = useContext(MouseHoverContext);
  const text = useContext(InputTextContext);
  const matchInfoObj = useContext(RegExpContext);

  const { isHover, setIsHover } = hoverState;
  const { indexes } = matchInfoObj;

  const allChunks = useMemo(() => {
    return GetAllChunks(indexes, text);
  }, [indexes, text]);

  const mouseEnter = (i: number) => {
    setIsHover({onMouseHover:true, index:i, clicked:false});
  };

  const mouseLeave = (i: number) => {
    setIsHover({onMouseHover:false, index:NaN, clicked:false});
  };

  const handleClick = (i:number) => {
    setIsHover({onMouseHover:true, index:i, clicked:true})
  };


  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  const checkIsHover = (str: string, i: number) => {
    return isHover.index === i ? (
      <span className="color-hover-1">{str}</span>
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
            onClick={() => handleClick(i)}
            onMouseEnter={() => mouseEnter(i)}
            onMouseLeave={() => mouseLeave(i)}
            key={i}
            className="color-output-1"
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
