import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <a href="/">
          <div className="landing">
            <div className="land"> Land</div>
            <div className="ing">ing</div>
          </div>
        </a>
      </h1>
      <div className="navbarlinks">
        <a href="/products">PRODUCTS</a>
        <a href="/abt">ABOUT</a>
        <a href="/blogs">BLOGS</a>
        <a href="/contact">CONTACT</a>
        <button style={{ border: "none" }}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
