import { Link } from "react-router-dom";
import { SampleContext } from "../context/sample";
import { useContext } from "react";

const Navbar = ({ onLogout }) => {
  const [user, setUser] = useContext(SampleContext);

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
      <h2>
        A platform designed to give users a space to store their sources of
        inspiration, such as: blogs, videos, images, or podcasts.{" "}
      </h2>
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
      </div>
    </>
  );
};

export default Navbar;
