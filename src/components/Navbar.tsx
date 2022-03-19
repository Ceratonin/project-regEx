const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light justify-content-between py-1">
    <div className="navbar-brand mx-4">regEx</div>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
          width="30"
          height="30"
          alt=""
        />
      </li>
      <li className="nav-item mx-5">
        <a className="" href="https://t.me/Nenzoidys">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
