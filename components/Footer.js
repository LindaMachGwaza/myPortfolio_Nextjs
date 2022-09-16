import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // import the brand icon
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="https://www.instagram.com/lindamachivenyika">
        <a>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/GloryOfGod/">
        <a>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/linda-machivenyika-5a142630/">
        <a>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </Link>
      <Link href="https://github.com/LindaMachGwaza">
        <a>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
      <div className="footer">
        <p>Copyright 2022 Linda Machivenyika</p>
      </div>
    </footer>
  );
};

export default Footer;
