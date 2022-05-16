import "./output.scss";
import { ITabItem } from "../../utils/types";
import Highlight from "./Highlight/Highlight";
import Replace from "./Replace/Replace";

const Output = ({ tabItem }: ITabItem) => {
  return (
    <div className="output">
      <div className="output-block" id="scroll">
        <div className="output-text">
          {tabItem === "Highlight" ? <Highlight /> : <Replace />}
        </div>
      </div>
    </div>
  );
};

export default Output;
