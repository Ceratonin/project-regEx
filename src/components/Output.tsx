import "./styles.scss";
import Highlight from "./Highlight";

const Output = ({ text, regExp, inputReg }: any) => {

  return (
    <section className="output">
      <p className="mb-1">Вывод:</p>
      <article id="style-1">
        <p className="output-text">
          <Highlight regExp={regExp} inputReg={inputReg}>{text}</Highlight>
        </p>
      </article>
    </section>
  );
};

export default Output;
