import { ITab } from "../../utils/types";
import "./tabs.scss";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tabtitle?: string;
  }
}

const Tab = ({ children, tabtitle }: ITab) => {
  return (
    <div className="tab-block" tabtitle={tabtitle}>
      {children}
    </div>
  );
};

export default Tab;
