import "../styles/styles.scss";
import Highlight from "./Highlight";

const Output = () => {
  return (
    <div className="output">
      <article className="output-block" id="style-1">
        <p className="output-text">
          <Highlight />
        </p>
      </article>
    </div>
  );
};

export default Output;
