import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary-100 shadow-sm">
      <div className="container py-2">
        {/* Logo 區 */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="images/logo.png"
            alt="雲林縣生涯及技藝教育資源網"
            height="50"
            className="me-2"
          />
          <span className="fs-5 fw-bold text-dark">
            雲林縣國民中學
            <br />
            生涯及技藝教育資源網
          </span>
        </Link>

        {/* 漢堡選單按鈕 */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="切換導航選單"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 導航選單 */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {[
              { to: "/", label: "首頁", end: true },
              { to: "/bulletin", label: "公告項目" },
              { to: "/demonstration-center", label: "職業試探示範中心" },
              { to: "/news", label: "技藝教育新聞" },
              { to: "/videos", label: "技職影片" },
            ].map(({ to, label, end }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-medium${isActive ? " active text-primary border-bottom border-2 border-primary" : ""}`
                  }
                  to={to}
                  end={end}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-register-btn ms-lg-2${isActive ? " is-active" : ""}`
                }
                to="/registration"
                onClick={() => setIsOpen(false)}
              >
                競賽報名
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
