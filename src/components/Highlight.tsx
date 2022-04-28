import { useContext } from "react";
import RegExpContext from "../contexts/RegExpContext";
import InputTextContext from "../contexts/InputTextContext";
import "./highlightStyles.scss";

// JSX компонент
const Highlight = () => {
  const text = useContext(InputTextContext);
  const matchInfoObj = useContext(RegExpContext);
  const { indexes } = matchInfoObj;

  const indexArray = indexes


  // Редьюсер, создающий новую строку, которая затем превратится
  // в JSX компонент через dangerouslySetInnerHTML.
  // В редьюсере есть проверкан на undefined, т.к. при создании
  // внутреннего массива инпутов, я отнимаю -1 индекс от lastIndex
  const result = indexArray
    .reduce((str: any, [start, end]: Array<number>) => {
      str[start] = `<span class="color-output-1">${
        str[start] !== undefined ? str[start] : ""
      }`;
      str[end] = `${str[end] !== undefined ? str[end] : ""}</span>`;

      return str;
    }, text.split(""))
    .join("");

  return result !== undefined ? (
    <span dangerouslySetInnerHTML={{ __html: result }} />
  ) : (
    <span>{text}</span>
  );
};

export default Highlight;

