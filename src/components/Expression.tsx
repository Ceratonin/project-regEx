import React, { useEffect, useState } from "react";
import "./styles.scss";

const Expression = () => {
  const [inputReg, setInputReg] = useState("/");

  const invalidInputReg = new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/, "g");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputReg(e.target.value.replace(invalidInputReg, "\\$&"));
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputReg(e.target.value);
  };


  const regExp = new RegExp(inputReg, "g");

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
