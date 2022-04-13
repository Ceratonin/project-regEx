import React, { useEffect, useState } from "react";
import "./styles.scss";

const Expression = () => {
  const [inputReg, setInputReg] = useState("/");

  const invalidInputReg = new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/, "g");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputReg(e.target.value.replace(invalidInputReg, "\\$&"));
  // };

  let handleChange;

  if (inputReg !== "") {
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputReg(e.target.value);
    };
  } else {
    setInputReg("/");
  }

  // console.log("useEffect");
  // try {
  //   RegExp(inputReg, "g");
  //   console.log("проверяем", inputReg);
  // } catch (err) {
  //   console.log(err, "Неправильный", regExpCheck);
  //   setRegExpCheck(false);
  //   console.log("regExpCheck", regExpCheck);
  // }

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
    // eslint-disable-next-line
  };

  let regExp = new RegExp("/", "");

  if (isRegExp(inputReg)) {
    regExp = new RegExp(inputReg, "g");
  }

  useEffect(() => {
    if (inputReg === "") {
      setInputReg("/");
    }
  }, [inputReg]);

  return {
    regExp,
    inputReg,
    renderExpression: (
      <section className="expression">
        <div className="input-group">
          <div className="input-group-prepend expressionStyle">
            <span
              className="input-group-text"
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              id="basic-addon1"
            >
              Выражение:
            </span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Введите регулярное выражение сюда"
          />
        </div>
      </section>
    ),
  };
};

export default Expression;
