import "../styles/styles.scss";
import { ITabItem } from "../utils/types";
import Highlight from "./Highlight";
import Replace from "./Replace";

const Output = ({ tabItem }: ITabItem) => {
  return (
    <div className="output">
      <article className="output-block" id="scroll">
        <div className="output-text">
          {tabItem === "Highlight" ? <Highlight /> : <Replace />}
        </div>
      </article>
    </div>
  );
};

export default Output;
