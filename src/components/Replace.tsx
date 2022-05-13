import React, { useContext, useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import regExpressionContext from "../contexts/regExpressionContext";
import InputTextContext from "../contexts/InputTextContext";

const initialValue = "Albert";

const Replace = () => {
  const inputText = useContext(InputTextContext);
  const regExpression = useContext(regExpressionContext);

  const [valueReplace, setValueReplace] = useState(initialValue);
  const [replacedText, setReplacedText] = useState(inputText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueReplace(e.target.value);
  };

  useEffect(() => {
    setReplacedText(inputText.replace(regExpression, valueReplace));
  }, [regExpression, inputText, valueReplace]);

  const infoTitle = (
    <p style={{ marginBottom: 0 }}>
      Блок замены использует метод .replace(), так что за дополнительными
      шаблонами обратитесь к
      <a
        style={{ color: "white", paddingLeft:"0.1rem" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description"
      >
        документации
      </a>
    </p>
  );
  return (
    <div className="replace">
      <div className="input-wrap">
        <Tooltip
          title={infoTitle}
          placement="top"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                color: "white",
                fontSize: "0.75em",
                marginBottom: 0,
              },
            },
          }}
        >
          <i className="fa-solid fa-circle-info" />
        </Tooltip>
        <input
          defaultValue={initialValue}
          className="form-control replace-input"
          placeholder="Введите выражение для замены совпадений"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="replace-block" id="scroll">
        <span>{replacedText}</span>
      </div>
    </div>
  );
};

export default Replace;
