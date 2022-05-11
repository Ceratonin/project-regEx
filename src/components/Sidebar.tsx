import { useContext, useEffect } from "react";
import RegExpContext from "../contexts/RegExpContext";
import "../styles/styles.scss";
import "../styles/highlightStyles.scss";
import "../styles/sidebar.scss";
import { useAmountLetter } from "./hooks/SidebarContent";
import MouseHoverContext from "../contexts/MouseHoverContext";
import { ISidebarState } from "../utils/types";

const Sidebar = ({ sidebarCheck }: ISidebarState) => {
  const [sidebarState, setSidebarState] = sidebarCheck;

  const { indexes, captures, groups } = useContext(RegExpContext);
  const { isHovered, memoizedListeners, isClicked, Ref } =
    useContext(MouseHoverContext);

  const checkIsHover = (group: string, index: number) => {
    if (isClicked.index === index) {
      return (
        <span key={index} className="color-clicked-1">
          {group}
        </span>
      );
    } else if (isHovered.index === index) {
      return (
        <span key={index} ref={Ref} className="color-hovered-1">
          {group}
        </span>
      );
    }
    return <span>{group}</span>;
  };

  // Функция, определяющая название группы, и если в регулярном выражении
  // есть именованная группа, то название группы включает в себя её название,
  // иначе же пишется просто номер группы захвата
  const matchGroupName = (group: string, id: number, index: number) => {
    let groupName = "";

    if (id === 0) groupName = `Совпадение-${index + 1}`;
    else groupName = `Группа-${id}`;

    if (groups && groups[index])
      Object.keys(groups[index]).map((elemKey) => {
        if (
          groups[index][elemKey] !== undefined &&
          groups[index][elemKey] === group
        )
          groupName = `Группа-${elemKey}`;

        return groupName;
      });

    return groupName;
  };

  useEffect(() => {
    if (isClicked.clicked) {
      setSidebarState(true);
    }
  }, [isClicked]);

  const sidebarShow = sidebarState ? "open" : "close";

  return (
    <div id="sidebar" className={sidebarShow}>
      <div id="style-1" className={`sidebar ${sidebarShow}`}>
        <div className="sidebar-header">
          <span className="sidebar-header-title">Регулярочки</span>
        </div>
        <hr />

        <div className="sidebar-content" id="style-1">
          <div className="sidebar-content-block first">
            <span>Совпадения</span>
            <div className="sidebar-content-area">
              <span className="sidebar-content-match-amount">
                {useAmountLetter()}
              </span>
              <hr />
              <ul className="list-group py-1">
                {captures.map((value, index) => {
                  return (
                    <li
                      className="list-group-item my-1"
                      id="style-1"
                      key={index}
                    >
                      {value.map((group, id) => {
                        return (
                          <div className="list-group-item-content" key={id}>
                            <span>
                              <div className="inside">
                                {matchGroupName(group, id, index)}
                              </div>
                            </span>
                            <span>
                              {id === 0 ? (
                                <span {...memoizedListeners} data-key={index}>
                                  {checkIsHover(group, index)}
                                </span>
                              ) : (
                                <span>{group}</span>
                              )}
                            </span>
                            <span>{id === 0 ? "Индексы:" : ""}</span>
                            <span>
                              {id === 0
                                ? `[${indexes[index].start} - ${indexes[index].end}]`
                                : ""}
                            </span>
                          </div>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* <div className="sidebar-content-block">
            <span>Объяснение</span>
            <div className="sidebar-content-area"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
