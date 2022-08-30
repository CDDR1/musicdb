import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">MusicDB</h1>
      <div className="navbar__repo-container">
        <BsGithub className="navbar__github" />
        <a href="https://github.com/CDDR1/musicdb" className="navbar__repo" target="_blank">
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
