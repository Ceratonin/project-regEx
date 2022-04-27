import "../styles/highlightStyles.scss";

interface IHighlight {
  children: string;
  regExp: RegExp;
  inputReg: string;
}

// Функция регулярного выражения
const expression = (text: string, regExp: RegExp) => {
  let indexes: any = [];
  let i = 0;

  if (text.match(regExp) !== null) {
    let matchesArray;
    const ind: Array<(number | undefined)[]> = [];
    
    // Проверка на присутствие флага g, ведь без этого флага, 
    // Метод matchAll() выбрасывает ошибку, поэтому если 
    // Этот флаг отсутствует, массив индексов создается
    // С помощью метода match
    if (regExp.toString().match(/\/g[imsuy]*$/) === null) {
      matchesArray = [text.match(regExp)];

      const test: RegExpExecArray | null = regExp.exec(text);

      matchesArray.forEach((match) => {
        if (match !== null && match.index !== undefined && test !== null)
          ind[i] = [match.index, match.index + test[0].length - 1];
      });

      // Если есть совпадение, то создается массив состоящий из массивов
      // Внутренний массив - это первый индекс вхождения и последний
      // Внешний массив - это массив массивов
    } else {
      matchesArray = [...text.matchAll(regExp)];

      matchesArray.forEach((match) => {
        regExp.exec(text);
        ind[i] = [match.index, regExp.lastIndex - 1];
        i += 1;
      });
    }

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
      str[end] = `${str[end] !== undefined ? str[end] : ""}</span>`;

      return str;
    }, text.split(""))
    .join("");

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default Highlight;
