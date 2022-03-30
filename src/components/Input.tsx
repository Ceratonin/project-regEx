import React, { useState } from "react";
import "./styles.scss";

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  return {
    value,
    render: (
      <section className="input">
        <div className="form-label">Текст:</div>
        <textarea
          id="style-1"
          value={value}
          onChange={handleChange}
          className="form-control input-text"
          placeholder="Введите текст сюда"
        />
      </section>
    ),
  };
};

export default Input;
