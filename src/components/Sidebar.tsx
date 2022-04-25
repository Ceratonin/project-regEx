import "./Sidebar.scss";

interface TSidebarState {
  sidebarState: boolean;
}

const Sidebar = ({ sidebarState }: TSidebarState) => {
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
            <div className="sidebar-content-match"></div>
          </div>

          <div className="sidebar-content-block">
            <span>Объяснение</span>
            <div className="sidebar-content-explanation"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
