import { IGetMatchesInfo, IMatchesIndexes } from "../utils/types";

// Функция, превращающая введенную строку в полноценное регулярное выражение
export const regExpCreate = (inputReg: string, flag: string) => {
  // Проверка правильности введеного RegExp, например /(/ выдаст ошибку в консоль и крашнет сайт,
  // для того, чтобы этого не происходило, используется метод try...catch, внутри которого
  // находится IIFE функция - функция которая вызывается сразу после своего определения
  const isRegExp = (value: string | RegExp) => {
    return (() => {
      try {
        RegExp(value);
        return true;
      } catch {
        return false;
      }
    })();
  };

  let regExp = new RegExp("/", "");

  if (isRegExp(inputReg)) {
    regExp = new RegExp(inputReg, flag);
  }
  return regExp;
};

// Функция, возвращающая объект из массивов indexes и captures
// Каждый элемент indexes представляет собой объект, состоящий из
// первого индекса совпадения, последнего, а также информации о том,
// надо ли этот элемент подсвечивать. Captures состоит из массивов, где
// каждый элемент это массив, содержащий информацию о скобочных группах
export const GetMatchesInfo = (
  text: string,
  inputReg: string,
  flag: string
): IGetMatchesInfo => {
  const captures: string[][] = [];
  const indexes: Array<IMatchesIndexes> = [];
  let matchesArray = [];
  let matchInfo = {
    indexes,
    captures,
  };

  const cap: string[] = [];
  let start;
  let end;

  const regExp = regExpCreate(inputReg, flag);

  // Проверка на присутствие флага g, ведь без этого флага,
  // метод matchAll() выбрасывает ошибку, поэтому если
  // этот флаг отсутствует, массив индексов создается
  // с помощью метода match
  if (regExp.toString().match(/\/g[imsuy]*$/) === null) {
    matchesArray = [text.match(regExp)];

    const test = regExp.exec(text);
    if (test)
      matchesArray.forEach((elem, i) => {
        if (elem && elem.index !== undefined) {
          start = elem.index;
          end = test[0].length - 1;

          indexes[i] = {
            start,
            end,
            highlight: true,
          };

          elem.forEach((key, j = 0) => {
            cap[j] = key;
          });

          captures[i] = [...cap];
        }
      });
  } else {
    matchesArray = [...text.matchAll(regExp)];
    matchesArray.forEach((elem, i) => {
      regExp.exec(text);

      if (elem && elem.index !== undefined) {
        start = elem.index;
        end = regExp.lastIndex;

        indexes[i] = {
          start,
          end,
          highlight: true,
        };

        elem.forEach((key, j = 0) => {
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

  return matchInfo;
};

// Функция, возвращающая куски, изначального текста в виде объектов
// Кусок текста, совпадающий с регуляркой имеет свойство highlight:true
// А кусок текста, не совпадающий, наоборот false
// Функция предназначена для будущего использования в подсветке
export const GetAllChunks = (indexes: IMatchesIndexes[], text: string) => {
  const allChunks: Array<IMatchesIndexes> = [];

  const chunkAdd = (start: number, end: number, highlight: boolean) => {
    if (end - start > 0) allChunks.push({ start, end, highlight });
  };

  let lastIndex = 0;
  indexes.forEach((chunk) => {
    chunkAdd(lastIndex, chunk.start, false);
    chunkAdd(chunk.start, chunk.end, true);
    lastIndex = chunk.end;
  });
  chunkAdd(lastIndex, text.length, false);

  return allChunks;
};
