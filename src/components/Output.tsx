import "./styles.scss";
import Highlight from "./Highlight";

const Output = () => {
  return (
    <section className="output">
      <p className="mb-1">Вывод:</p>
      <article className="output-block">
          <p className="output-text">
            <Highlight />
          </p>
      </article>
    </section>
  );
};

export default Output;
