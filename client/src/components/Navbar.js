import { Link } from "react-router-dom";

const Navbar = ({ user, setUser, onLogout }) => {
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
      <Link to="/newtopic" className="nav-button">
        new topic
      </Link>
      <Link to="/" className="nav-button">
        topics
      </Link>
      {/* <Link to="/notes" className="nav-button">
        my notes
      </Link> */}
    </div>
    </>
  );
};

export default Navbar;
