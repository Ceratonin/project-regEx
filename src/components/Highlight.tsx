import { useContext } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import { GetAllChunks } from "./GetMatchesInfo";
import "../styles/highlightStyles.scss";

const Highlight = () => {
  const text = useContext(InputTextContext);
  const matchInfoObj = useContext(RegExpContext);
  const { indexes } = matchInfoObj;

  const allChunks = GetAllChunks(indexes, text);

  // Кондишинл рендер, зависящий от того, имеет ли кусок highlight:true
  return (
    <span>
      {allChunks.map((chunk, i) => {
        const { start, end, highlight } = chunk;
        const str = text.substring(start, end);
        return highlight ? (
          <span key={i} className="color-output-1">
            {str}
          </span>
        ) : (
          <span key={i}>{str}</span>
        );
      })}
    </span>
  );
};
export default Highlight;
