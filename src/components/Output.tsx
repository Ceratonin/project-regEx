import "./styles.scss";
import "./outputStyles.scss";

const Output = ({ text, regExp, inputReg }: any) => {


  let parts = Array(text);

  try{
  parts = text.split(new RegExp(`(${inputReg})`, "g"));
  } catch {
    console.log("ошипка")
  }

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
              <span key={part + i}>{}</span>
            );
          })}
        </p>
      </article>
    </section>
  );
};

export default Output;
