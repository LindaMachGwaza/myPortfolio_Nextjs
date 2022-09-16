import Link from "next/link";

//Function to display the navbar
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <p>Portfolio</p>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
