import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useContext } from "react";

const Navbar = ({ onLogout }) => {
  const [user, setUser] = useContext(UserContext);

  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setUser(null);
        }
      })
      .then(<redirect to="/" />);
  };

  return (
    <>
      <h1>Creative Caboodle</h1>
      <div className="navbar-background">
        <p className="welcome">welcome, {user.username}!</p>
        <button onClick={handleLogoutClick} className="nav-button">
          logout
        </button>
        <Link to="/resources" className="nav-button">
          resources
        </Link>
        <Link to="/" className="nav-button">
          home
        </Link>
        <Link to="/topics" className="nav-button">
          topics
        </Link>
        <Link to="/help">
          ask ChatGPT
        </Link>
      </div>
    </>
  );
};

export default Navbar;
