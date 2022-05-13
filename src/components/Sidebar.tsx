import { useContext, useEffect } from "react";
import RegExpContext from "../contexts/MatchInfoArrContext";
import "../styles/styles.scss";
import "../styles/highlightStyles.scss";
import "../styles/sidebar.scss";
import { useAmountLetter } from "./hooks/SidebarContent";
import MouseHoverContext from "../contexts/MouseHoverContext";
import { IGetMatchesInfo, IMatchesGroups, ISidebarState } from "../utils/types";

const Sidebar = ({ sidebarCheck }: ISidebarState) => {
  const [sidebarState, setSidebarState] = sidebarCheck;

  const matchInfoArr = useContext(RegExpContext);
  const { isHovered, memoizedListeners, isClicked, Ref } =
  useContext(MouseHoverContext);
  
  const checkIsHover = (capturedGroup: string, index: number) => {
    if (isClicked.index === index) {
      return (
        <span key={index} className="color-clicked-1">
          {capturedGroup}
        </span>
      );
    } else if (isHovered.index === index) {
      return (
        <span key={index} ref={Ref} className="color-hovered-1">
          {capturedGroup}
        </span>
      );
    }
    return <span>{capturedGroup}</span>;
  };

  // Функция, определяющая название группы, и если в регулярном выражении
  // есть именованная группа, то название группы включает в себя её название,
  // иначе же пишется просто номер группы захвата
  const matchGroupName = (
    capturedGroup: string,
    groups: IMatchesGroups,
    id: number,
    index: number
  ) => {
    let groupName = "";

    if (id === 0) groupName = `Совпадение-${index + 1}`;
    else groupName = `Группа-${id}`;

    if (groups)
      Object.keys(groups).map((elemKey) => {
        if (groups[elemKey] !== undefined && groups[elemKey] === capturedGroup)
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
      <div id="scroll" className={`sidebar ${sidebarShow}`}>
        <div className="sidebar-header">
          <span className="sidebar-header-title">Регулярочки</span>
        </div>
        <hr />

        <div className="sidebar-content" id="scroll">
          <div className="sidebar-content-block first">
            <span>Совпадения</span>
            <div className="sidebar-content-area">
              <span className="sidebar-content-match-amount">
                {useAmountLetter()}
              </span>
              <hr />
              <ul className="list-group py-1">
                {matchInfoArr.map((value: IGetMatchesInfo, index: number) => {
                  const { start, end } = value.indexes;
                  return (
                    <li
                      className="list-group-item my-1"
                      id="scroll"
                      key={index}
                    >
                      {value.captures.map((capturedGroup, id) => {
                        return (
                          <div className="list-group-item-content" key={id}>
                            <span>
                              <div className="inside">
                                {matchGroupName(
                                  capturedGroup,
                                  value.groups,
                                  id,
                                  index
                                )}
                              </div>
                            </span>
                            <span>
                              {id === 0 ? (
                                <span {...memoizedListeners} data-key={index}>
                                  {checkIsHover(capturedGroup, index)}
                                </span>
                              ) : (
                                <span>{capturedGroup}</span>
                              )}
                            </span>
                            <span>{id === 0 ? "Индексы:" : ""}</span>
                            <span>{id === 0 ? `[${start} - ${end}]` : ""}</span>
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
