import "./highlightStyles.scss";

interface IHighlight {
  children: string;
  regExp: RegExp;
  inputReg: string;
}

// Функция регулярного выражения
const expression = (text: string, regExp: RegExp) => {
  let indexes: any = [];
  let i = 0;

// Если есть совпадение, то создается массив состоящий из массивов
// Внутренний массив - это первый индекс вхождения и последний
// Внешний массив - это массив массивов
  if (text.match(regExp) !== null) {
    const matchesArray = [...text.matchAll(regExp)];
    const ind: Array<(number | undefined)[]> = [];

    matchesArray.forEach((match) => {
      regExp.exec(text);
      ind[i] = [match.index, regExp.lastIndex - 1];
      i += 1;
    });

    indexes = [...ind];
  }
  return indexes;
};

// JSX компонент
const Highlight = ({ children: text, regExp, inputReg }: IHighlight) => {
  const indexes = expression(text, regExp);

// Редьюсер, создающий новую строку, которая затем превратится
// в JSX компонент через dangerouslySetInnerHTML.
// В редьюсере есть проверкан на undefined, т.к. при создании 
// Внутреннего массива инпутов, я отнимаю -1 индекс от lastIndex
  const result = indexes
    .reduce((str: any, [start, end]: Array<number>) => {
      str[start] = `<span class="color-output-1">${
        str[start] !== undefined ? str[start] : ""
      }`;
      console.log(str[start])
      str[end] = `${str[end] !== undefined ? str[end] : ""}</span>`;

      return str;
    }, text.split(""))
    .join("");

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default Highlight;
