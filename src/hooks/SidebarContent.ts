import { useContext } from "react";
import RegExpContext from "../contexts/MatchInfoArrContext";

export const useAmountLetter = () => {
  const matchInfoArr = useContext(RegExpContext);

  const amount = matchInfoArr.length.toString();
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
