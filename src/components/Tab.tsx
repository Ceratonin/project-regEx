import { ITab } from "../utils/types";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tabTitle?: string;
  }
}

const Tab = ({ children, tabTitle }: ITab) => {
  return <div className="tab-block" tabTitle={tabTitle}>{children}</div>;
};

export default Tab;
