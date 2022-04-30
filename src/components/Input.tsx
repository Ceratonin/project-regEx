import React, { useState } from "react";
import "./styles.scss";

const initialText = `RegExr was created by gskinner.com, and is proudly hosted by Media Temple.

  Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
  
  The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
  
  Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.
  `;

const Input = () => {
  const [inputText, setInputText] = useState(initialText);

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
