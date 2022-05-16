import { useContext, useMemo } from "react";
import Tooltip from "@mui/material/Tooltip";
import MatchInfoArrContext from "../../../contexts/MatchInfoArrContext";
import InputTextContext from "../../../contexts/InputTextContext";
import MouseHoverContext from "../../../contexts/MouseHoverContext";
import { GetAllChunks } from "../../GetMatchesInfo";
import "./highlight.scss";

const Highlight = () => {
  const text = useContext(InputTextContext);
  const matchInfoArr = useContext(MatchInfoArrContext);

  const { isHovered, memoizedListeners, mouseClick, isClicked, Ref } =
    useContext(MouseHoverContext);

  const handleClick = () => {
    if (Ref && Ref.current)
      Ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const allChunks = useMemo(() => {
    return GetAllChunks(matchInfoArr, text);
  }, [matchInfoArr, text]);

  // Подсветка при наведении
  const checkIsHover = (str: string, i: number) => {
    if (isClicked.index === i / 2) {
      return (
        <span key={i} className="color-clicked-1">
          {str}
        </span>
      );
    } else if (isHovered.index === i / 2) {
      // const ind = indexes[i / 2];
      const ind = matchInfoArr[i / 2].indexes;
      return (
        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                color: "white",
                background: "linear-gradient(220deg, #52b3ff 30%, #5b87eb 90%)",
                fontSize: "1em",
              },
            },
          }}
          title={`[${ind.start} - ${ind.end}]`}
          placement="top"
          disableInteractive
          arrow
        >
          <span key={i} onClick={handleClick} className="color-hovered-1">
            {str}
          </span>
        </Tooltip>
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
