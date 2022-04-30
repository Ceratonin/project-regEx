import { useContext } from "react";
import RegExpContext from "../contexts/RegExpContext";

const SidebarContent = () => {
  const indexArray = useContext(RegExpContext);
  let matchAmount: number | string = 0;

  return matchAmount;
};

export const useMatchContent = () => {
  const { indexes } = useContext(RegExpContext);

  const amount = indexes.length.toString();
  const regExpLetter = amount.match(/[1]?[0-9]$/);
  let letter;

  if (regExpLetter)
    switch (Number(regExpLetter[0])) {
      case 1:
        letter = "е";
        break;

      case 2:
      case 3:
      case 4:
        letter = "я";
        break;

      default:
        letter = "й";
    }

  if (amount !== "0") {
    return `Найдено ${amount} совпадени${letter}`;
  }
  return "Совпадений не найдено";
};

export const useMatchArray = () => {

}

export default SidebarContent;
