import React, { useEffect, useState } from "react";
import "./styles.scss";

const Expression = () => {
  const [value, setValue] = useState("/");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value == "") setValue("/");
  }, [value]);

  const reg = new RegExp(value, "g");

  return {
    reg,
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
