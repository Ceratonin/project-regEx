import { useCallback, useState } from "react";
import { ITabs, ITabTitle } from "../../utils/types";
import "../../styles/common.scss";
import "./tabs.scss";

const TabTitle = ({
  tabTitle,
  setTabTitle,
  index,
  tabTitleState,
}: ITabTitle) => {
  const handleClick = useCallback(() => {
    setTabTitle(index);
  }, [setTabTitle, index]);

  return (
    <li className="nav-item">
      <button
        className={`nav-link ${tabTitleState === index ? "active" : ""}`}
        type="button"
        onClick={handleClick}
      >
        {tabTitle}
      </button>
    </li>
  );
};

const Tabs = ({ children }: ITabs) => {
  const [tabTitleState, setTabTitleState] = useState(0);

  return (
    <section className="tab-container">
      <ul className="nav nav-tabs">
        {children.map((elem, index) => {
          return (
            <TabTitle
              key={index}
              index={index}
              tabTitle={elem.props.tabtitle}
              setTabTitle={setTabTitleState}
              tabTitleState={tabTitleState}
            />
          );
        })}
      </ul>
      {children[tabTitleState]}
    </section>
  );
};

export default Tabs;
