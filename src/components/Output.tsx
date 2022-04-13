import "./styles.scss";
import "./outputStyles.scss";
import { useEffect } from "react";

const Output = ({ arrOfMatches, text, regExp, inputReg }: any) => {
  // let word
  // arrOfMatches.forEach((regArr: any) => {
  //   const [reg, lastIndex] = regArr;
  //   word = text.substring(reg.index, lastIndex);
  // });

  let parts;

  if (inputReg !== "") {
    parts = text.split(new RegExp(`(${inputReg})`));
  } else {
    parts = Array(text);
  }

  console.log(regExp, inputReg);

  // useEffect(() => {

  // }, [regExp])

  return (
    <section className="output">
      <p className="mb-1">Вывод:</p>
      <article id="style-1">
        <p className="output-text">
          {parts.map((part: any, i: number) => {
            return regExp.test(part) ? (
              // eslint-disable-next-line
              <span className="color-1" key={part + i}>
                {part}
              </span>
            ) : (
              // eslint-disable-next-line
              <span key={part + i}>{part}</span>
            );
          })}
        </p>
      </article>
    </section>
  );
};

export default Output;
