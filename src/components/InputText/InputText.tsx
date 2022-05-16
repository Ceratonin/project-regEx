import React, { useState } from "react";
import "../../styles/common.scss"
import "./inputText.scss";

const initialText = `RegExr was created by Ceratonin, bootstrapped on create-react-app.

Edit the Expression & Text to see matches. Hover over matches to see their indexes. Regular Expression engine is provided by JavaScript.
  
The side bar includes an index list. If regExp has capturing groups, they, and their names(if they exist on regExp) also will be displayed there.
  
Below input Text there are few Tools. Matches & Replace output custom results. Matches shows text with highlighted matches. With replace you can Replace matched words with something else.`;

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
          rows={4}
          id="scroll"
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
