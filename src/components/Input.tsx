import React, { useState } from "react";
import "../styles/styles.scss";

const Input = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInputText(e.target.value);

  return {
    inputText,
    renderInputText: (
      <section className="input">
        <div className="form-label">Текст:</div>
        <textarea
          id="style-1"
          value={inputText}
          onChange={handleChange}
          className="form-control input-text"
          placeholder="Введите текст сюда"
        />
      </section>
    ),
  };
};

export default Input;
