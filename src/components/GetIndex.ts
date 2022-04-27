const GetIndex = (text: string, regExp: RegExp) => {
    let indexes: any = [];
    let matchesArray;
    let i = 0;
  
    if (text.match(regExp) !== null) {
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

  export default GetIndex