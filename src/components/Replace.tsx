import React, { useContext, useEffect, useState } from "react";
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
  }, [valueReplace, inputText]);

  return (
    <div className="replace">
      <input
        defaultValue={initialValue}
        className="form-control replace-input"
        placeholder="Введите выражение для замены совпадений"
        type="text"
        onChange={handleChange}
      />
      <div className="replace-block" id="scroll">
        <span>{replacedText}</span>
      </div>
    </div>
  );
};

export default Replace;
