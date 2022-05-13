import {
  IGetMatchesInfo,
  IMatchesGroups,
  IMatchesIndexes,
} from "../utils/types";

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

// Функция, возвращающая массив из обхектов типа {indexes, captures, groups}
// Каждый элемент indexes представляет собой объект, состоящий из
// первого индекса совпадения, последнего, а также информации о том,
// надо ли этот элемент подсвечивать. Captures состоит из массивов, где
// каждый элемент это массив, содержащий информацию о скобочных группах.
// А groups - содержит в себе именованные групппы захвата, если такие есть
export const GetMatchesInfo = (
  text: string,
  inputReg: string,
  flag: string
): IGetMatchesInfo => {
  let captures: string[] = [];
  let indexes: IMatchesIndexes = {
    start: -1,
    end: -1,
    highlight: false,
  };
  let groups: IMatchesGroups = {};
  let matchesArray = [];
  let matchInfo = {
    indexes,
    captures,
    groups,
  };

  const matchesInfoArray: any = [];

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
      matchesArray.forEach((elem) => {
        if (elem && elem.index !== undefined) {
          start = elem.index;
          end = test[0].length - 1;

          indexes = {
            start,
            end,
            highlight: true,
          };

          elem.forEach((key, j = 0) => {
            cap[j] = key;
          });

          captures = [...cap];

          if (elem.groups) groups = elem.groups;

          matchInfo = {
            indexes,
            captures,
            groups,
          };

          matchesInfoArray.push(matchInfo);
        }
      });
  } else {
    matchesArray = [...text.matchAll(regExp)];
    matchesArray.forEach((elem, i) => {
      regExp.exec(text);

      if (elem && elem.index !== undefined) {
        start = elem.index;
        end = regExp.lastIndex;

        indexes = {
          start,
          end,
          highlight: true,
        };

        elem.forEach((key, j = 0) => {
          cap[j] = key;
        });

        captures = [...cap];

        if (elem.groups) groups = elem.groups;

        matchInfo = {
          indexes,
          captures,
          groups,
        };

        matchesInfoArray.push(matchInfo);
      }
    });
  }

  return matchesInfoArray;
};

// Функция, возвращающая куски, изначального текста в виде объектов
// Кусок текста, совпадающий с регуляркой имеет свойство highlight:true
// А кусок текста, не совпадающий, наоборот false
// Функция предназначена для будущего использования в подсветке
export const GetAllChunks = (matchInfoArr: IGetMatchesInfo[], text: string) => {
  const allChunks: IMatchesIndexes[] = [];

  const chunkAdd = (start: number, end: number, highlight: boolean) => {
    if (end - start > 0) allChunks.push({ start, end, highlight });
  };

  let lastIndex = 0;
  matchInfoArr.forEach((chunk) => {
    const { start, end } = chunk.indexes;

    chunkAdd(lastIndex, start, false);
    chunkAdd(start, end, true);
    lastIndex = end;
  });
  chunkAdd(lastIndex, text.length, false);

  return allChunks;
};
