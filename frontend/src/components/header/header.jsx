import "./header.scss";
import appIcon from "../../assets/images/appIcon.png";
import profileIcon from "../../assets/images/profile.png";
export default function Header({ selectedPage, setSelectedPage }) {
  const bgColor = {
    backgroundColor: "#B5C99A",
    hoverColor: "#B6C0A8",
  };
  const headernav = () => {
    return (
      <ul className="header-nav">
        <li
          style={{
            backgroundColor:
              selectedPage === "home"
                ? bgColor.hoverColor
                : bgColor.backgroundColor,
            cursor: "pointer",
          }}
          onClick={() => setSelectedPage("home")}
        >
          Home
        </li>
        <li
          style={{
            backgroundColor:
              selectedPage === "account"
                ? bgColor.hoverColor
                : bgColor.backgroundColor,
            cursor: "pointer",
          }}
          onClick={() => setSelectedPage("account")}
        >
          Account
        </li>
        <li
          style={{
            backgroundColor:
              selectedPage === "gallery"
                ? bgColor.hoverColor
                : bgColor.backgroundColor,
            cursor: "pointer",
          }}
          onClick={() => setSelectedPage("gallery")}
        >
          Gallery
        </li>
      </ul>
    );
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={appIcon} alt="logo" />
        </div>
        {headernav()}
        <div className="header-profile">
          <img src={profileIcon} alt="profile" />
        </div>
      </div>
    </div>
  );
}
