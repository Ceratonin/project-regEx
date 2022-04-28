import "./Sidebar.scss";
import SidebarContent, { useMatchContent } from "./SidebarContent";

const Sidebar = ({ sidebarState }: { sidebarState: boolean }) => {
  const sidebarCheck = sidebarState ? "open" : "close";

  return (
    <div id="sidebar" className={sidebarCheck}>
      <div className={`sidebar ${sidebarCheck}`}>
        <div className="sidebar-header">
          <span className="sidebar-header-title">Регулярочки</span>
        </div>
        <hr />

        <div className="sidebar-content">
          <div className="sidebar-content-block first">
            <span>Совпадения</span>
            <div className="sidebar-content-area">
              <span className="sidebar-content-match-amount">
                {useMatchContent()}
              </span>
              <hr />
              <div>da</div>
            </div>
          </div>

          <div className="sidebar-content-block">
            <span>Объяснение</span>
            <div className="sidebar-content-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
