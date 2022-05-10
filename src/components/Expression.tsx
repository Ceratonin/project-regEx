import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "../styles/styles.scss";
import "../styles/highlightStyles.scss";

const flags = [
  { fullName: "global", char: "g", charID: 0 },
  { fullName: "case-insensetive", char: "i", charID: 5 },
  { fullName: "multiline", char: "m", charID: 0 },
  { fullName: "single-line", char: "s", charID: 0 },
  { fullName: "unicode", char: "u", charID: 0 },
  { fullName: "sticky", char: "y", charID: 5 },
];

const initialRegExp = `(?<letters>[A-Z])(?<word>\\w+)`; // <---------------- Дефолтное значение

const Expression = () => {
  const [inputReg, setInputReg] = useState(initialRegExp);
  const [checkedState, setCheckedState] = useState(
    new Array(6).fill(true).fill(false, 1)
  );
  const [flag, setFlag] = useState("g");

  let handleChange;

  if (inputReg !== "") {
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputReg(e.target.value);
    };
  } else {
    setInputReg("/");
  }

  const handleCheckChange = (id: number) => {
    const checkState = checkedState.map((flagB, index) => {
      return index === id ? !flagB : flagB;
    });

    setCheckedState(checkState);
  };

  useEffect(() => {
    if (inputReg === "") {
      setInputReg("/");
    }
  }, [inputReg]);

  useEffect(() => {
    setFlag(
      checkedState.reduce((flagSum, flagCur, id) => {
        return flagCur ? flagSum + flags[id].char : flagSum;
      }, "")
    );
  }, [checkedState]);

  const checkFlag = () => {
    if (flag === "") {
      return "Flag";
    }
    return flag;
  };

  return {
    inputReg,
    flag,
    renderExpression: (
      <section className="expression">
        <div className="input-group">
          <span
            className="input-group-text"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            id="basic-addon1"
          >
            Выражение:
          </span>

          <input
           defaultValue={initialRegExp}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Введите регулярное выражение сюда"
          />

          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuClickableInside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            {checkFlag()}
          </button>

          <ul
            className="dropdown-menu"
            aria-label="dropdownMenuClickableInside"
          >
            {flags.map(({ fullName, char, charID }, id) => {
              return (
                <li key={id} className="dropdown-content">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`flexCheckDefault-${id}`}
                      name={char}
                      value={char}
                      checked={checkedState[id]}
                      onChange={() => handleCheckChange(id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDefault-${id}`}
                    >
                      {fullName.split("").map((ch, chid) =>
                        chid === charID ? (
                          <span key={chid} className="color-flag-1">
                            {ch}
                          </span>
                        ) : (
                          <span key={chid}>{ch}</span>
                        )
                      )}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    ),
  };
};

export default Expression;
