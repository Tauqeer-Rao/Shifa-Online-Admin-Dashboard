import "../../../styles/admin-dashboard/Navbar.css";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navtitle">
        <img className="logoo" src={logo} alt="logo" />
        <h1>Shifa Online</h1>
      </nav>
    </>
  );
};

export default Navbar;
