import { IIndexes, ICaptures } from "../utils/types";

const GetMatchesInfo = (text: string, regExp: RegExp) => {
  let matchesArray: (RegExpMatchArray | null)[];
  const indexes: number[][] = [];
  const captures: string[][] = [];
  let matchInfo = {
    indexes,
    captures,
  };

  if (text.match(regExp)) {
    const cap: string[] = [];

    // Проверка на присутствие флага g, ведь без этого флага,
    // метод matchAll() выбрасывает ошибку, поэтому если
    // этот флаг отсутствует, массив индексов создается
    // с помощью метода match
    if (regExp.toString().match(/\/g[imsuy]*$/) === null) {
      matchesArray = [text.match(regExp)];

      const test: RegExpExecArray | null = regExp.exec(text);

      matchesArray.forEach((match, i) => {
        if (match && match.index && test) {
          indexes[i] = [match.index, match.index + test[0].length - 1];

          match.forEach((key, j = 0) => {
            cap[j] = key;
          });

          captures[i] = [...cap];
        }
      });

      // Если есть совпадение, то создается массив состоящий из массивов
      // Внутренний массив - это первый индекс вхождения и последний
      // Внешний массив - это массив массивов. Кроме того создается еще
      // один массив - capWrap в который записываются скобочные группы
    } else {
      matchesArray = [...text.matchAll(regExp)];

      matchesArray.forEach((match, i) => {
        regExp.exec(text);
        if (match) {
          if (match.index !== undefined)
            indexes[i] = [match.index, regExp.lastIndex - 1];

          match.forEach((key, j = 0) => {
            cap[j] = key;
          });

          captures[i] = [...cap];
        }
      });
    }

    matchInfo = {
      indexes,
      captures,
    };
  }

  return matchInfo;
};

export default GetMatchesInfo;
