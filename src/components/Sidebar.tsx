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

        <div className="sidebar-content">
          <div className="sidebar-content-match">
            <span>Совпадения</span>
          </div>
          <div className="sidebar-content-explanation">
            <span>Объяснение</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
