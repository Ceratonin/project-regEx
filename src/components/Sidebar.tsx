import { useContext } from "react";
import RegExpContext from "../contexts/RegExpContext";
import "./styles.scss";
import "./Sidebar.scss";
import { useMatchContent } from "./SidebarContent";

const Sidebar = ({ sidebarState }: { sidebarState: boolean }) => {
  const { indexes, captures } = useContext(RegExpContext);

  const sidebarCheck = sidebarState ? "open" : "close";

  return (
    <div id="sidebar" className={sidebarCheck} >
      <div id="style-1" className={`sidebar ${sidebarCheck}`}>
        <div className="sidebar-header">
          <span className="sidebar-header-title">Регулярочки</span>
        </div>
        <hr />

        <div className="sidebar-content" id="style-1">
          <div className="sidebar-content-block first">
            <span>Совпадения</span>
            <div className="sidebar-content-area">
              <span className="sidebar-content-match-amount">
                {useMatchContent()}
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
                        let groupName = "";
                        if (id === 0) groupName = `Совпадение-${index + 1}`;
                        else groupName = `Группа-${id}`;
                        return (
                          <div className="list-group-item-content" key={id}>
                            <span>
                              <div className="inside">{groupName}</div>
                            </span>
                            <span>{group}</span>
                            <span>{id === 0 ? "Индексы:" : ""}</span>
                            <span>
                              {id === 0
                                ? `[${indexes[index][0]} - ${indexes[index][1]}]`
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
